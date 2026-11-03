import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { build, transform } from 'esbuild';
import { PurgeCSS } from 'purgecss';

const pages = readdirSync('.').filter((file) => file.endsWith('.html')).sort();
const styles = ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'assets/styles/custom.css'];
const purged = await new PurgeCSS().purge({
  content: pages,
  css: styles,
  // Bootstrap adds these states at runtime, including during transitions.
  safelist: ['active', 'show', 'collapse', 'collapsing', 'collapsed'],
});
const css = await transform(purged.map(({ css }) => css).join('\n'), {
  loader: 'css', minify: true, target: ['chrome100', 'firefox100', 'safari15.4'],
  legalComments: 'inline',
});
writeFileSync('assets/styles/site.min.css', css.code);
await build({
  entryPoints: ['assets/scripts/custom.js'],
  outfile: 'assets/scripts/site.min.js',
  bundle: true, minify: true, target: ['es2020'], legalComments: 'inline',
});

// Version both assets by content so updates invalidate the shared browser cache.
for (const asset of ['assets/styles/site.min.css', 'assets/scripts/site.min.js']) {
  const content = readFileSync(asset);
  const version = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const pattern = new RegExp(`${asset.replaceAll('.', '\\.')}(?:\\?v=[a-zA-Z0-9]+)?`, 'g');
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    writeFileSync(page, html.replace(pattern, `${asset}?v=${version}`));
  }
  console.log(`${asset}: ${(content.length / 1024).toFixed(1)} KiB`);
}
