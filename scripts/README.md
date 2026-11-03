# Seleos Website

Die sieben neuen Leistungsseiten werden aus `scripts/generate-service-pages.mjs` erzeugt. Änderungen an diesen Seiten deshalb nicht direkt im generierten HTML vornehmen, sondern im Generator und anschließend mit `npm run build` neu erzeugen.

Mit Node.js 22.19+ zuerst `npm ci` ausführen. `package-lock.json` hält die Build-Abhängigkeiten fest.

`npm run build` generiert die Leistungsseiten, erstellt die optimierten Assets und prüft Metadaten, JSON-LD, lokale Dateien sowie interne Links und Anker.

CSS-Änderungen gehören in `assets/styles/custom.css`, JavaScript-Änderungen in `assets/scripts/custom.js`. Der Asset-Build entfernt ungenutzte CSS-Selektoren anhand aller HTML-Seiten und bündelt nur Bootstrap Collapse und ScrollSpy. Die Zustände `active`, `show`, `collapse`, `collapsing` und `collapsed` bleiben explizit erhalten. Neue dynamische CSS-Klassen bei Bedarf in `scripts/build-assets.mjs` ergänzen.

Die erzeugten Dateien `assets/styles/site.min.css` und `assets/scripts/site.min.js` werden eingecheckt, aber nicht von Hand bearbeitet. Inhaltsbasierte URL-Versionen verhindern veraltete Assets im Browser-Cache. GitHub Pages führt den Build vor jedem Deployment erneut aus; `node_modules` wird nicht veröffentlicht.

Zusätzliche HTML-Prüfung: `npx --yes html-validate@11.18.0 '*.html'`.

Lighthouse-Prüfung bei laufendem lokalen HTTP-Server: `npx --yes lighthouse@13.6.0 http://127.0.0.1:8765/ --chrome-flags='--headless=new' --output=html --output-path=/tmp/seleos-lighthouse.html`. Für Desktop zusätzlich `--preset=desktop` verwenden. Lokale Messungen und Live-Messungen getrennt bewerten, da GitHub Pages komprimiert ausliefert und andere Cache-Header setzt.
