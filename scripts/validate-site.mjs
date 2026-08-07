import { existsSync, readFileSync, readdirSync } from 'node:fs';

const servicePages = [
  'ki-gestuetzte-softwareentwicklung.html',
  'continuous-security-compliance-management.html',
  'cyber-resilience-act.html',
  'nis2-umsetzung.html',
  'penetrationstest-webanwendungen-apis.html',
  'security-review-software.html',
  'software-architektur-bewertung.html'
].sort();

const failures = [];
const titles = new Map();
const canonicals = new Map();
const decodeHtml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .trim();

if (servicePages.length !== 7) failures.push(`expected 7 generated service pages, found ${servicePages.length}`);

const htmlPages = readdirSync('.').filter((file) => file.endsWith('.html')).sort();
const htmlByFile = new Map(htmlPages.map((file) => [file, readFileSync(file, 'utf8')]));

for (const [file, html] of htmlByFile) {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) failures.push(`${file}: duplicate ids ${duplicateIds.join(', ')}`);

  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const structuredData = JSON.parse(block[1]);
      const graph = structuredData['@graph'] ?? [structuredData];
      const faq = graph.find((node) => node['@type'] === 'FAQPage');
      if (faq) {
        const visibleQuestions = [...html.matchAll(/class="accordion-button[^"]*"[^>]*>([^<]+)<\/button>/g)]
          .map((match) => decodeHtml(match[1]));
        const structuredQuestions = (faq.mainEntity ?? []).map((question) => question.name);
        if (JSON.stringify(visibleQuestions) !== JSON.stringify(structuredQuestions)) {
          failures.push(`${file}: visible FAQ questions do not match FAQPage JSON-LD`);
        }
      }
    } catch (error) {
      failures.push(`${file}: invalid JSON-LD (${error.message})`);
    }
  }

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/.test(reference)) continue;
    const [rawPath, fragment = ''] = reference.split('#', 2);
    const path = rawPath.split('?', 1)[0];
    const targetFile = !path ? file : path === '/' ? 'index.html' : path.replace(/^\//, '');

    if (path && !existsSync(targetFile)) failures.push(`${file}: missing local target ${reference}`);
    if (fragment && targetFile.endsWith('.html') && htmlByFile.has(targetFile)) {
      const targetHtml = htmlByFile.get(targetFile);
      const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`\\bid="${escapedFragment}"`).test(targetHtml)) {
        failures.push(`${file}: missing anchor target ${reference}`);
      }
    }
  }
}

for (const file of servicePages) {
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? '';
  const expectedCanonical = `https://www.seleos.de/${file}`;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  if ((html.match(/<h1\b/gi) ?? []).length !== 1) failures.push(`${file}: expected exactly one h1`);
  if (!title) failures.push(`${file}: missing title`);
  if (description.length < 110 || description.length > 165) failures.push(`${file}: description length ${description.length}`);
  if (canonical !== expectedCanonical) failures.push(`${file}: canonical does not match URL`);
  if (!html.includes('property="og:image:alt"')) failures.push(`${file}: missing og:image:alt`);
  if (!html.includes('name="twitter:card"')) failures.push(`${file}: missing twitter card`);
  if (/<button[\s\S]{0,500}<input\b/i.test(html)) failures.push(`${file}: nested input inside button`);
  if (jsonLdBlocks.length !== 1) failures.push(`${file}: expected exactly one JSON-LD block`);

  if (titles.has(title)) failures.push(`${file}: duplicate title also used by ${titles.get(title)}`);
  if (canonicals.has(canonical)) failures.push(`${file}: duplicate canonical also used by ${canonicals.get(canonical)}`);
  titles.set(title, file);
  canonicals.set(canonical, file);
}

const sitemap = readFileSync('sitemap.xml', 'utf8');
const llms = readFileSync('llms.txt', 'utf8');
for (const file of servicePages) {
  if (!sitemap.includes(`https://www.seleos.de/${file}`)) failures.push(`${file}: missing from sitemap.xml`);
  if (!llms.includes(`https://www.seleos.de/${file}`)) failures.push(`${file}: missing from llms.txt`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${servicePages.length} generated service pages and ${htmlPages.length} HTML files.`);
}
