# Seleos Website

Die sieben neuen Leistungsseiten werden aus `scripts/generate-service-pages.mjs` erzeugt. Änderungen an diesen Seiten deshalb nicht direkt im generierten HTML vornehmen, sondern im Generator und anschließend mit `npm run build` neu erzeugen.

`npm run build` generiert die Leistungsseiten und prüft Metadaten, JSON-LD, lokale Dateien sowie interne Links und Anker.
