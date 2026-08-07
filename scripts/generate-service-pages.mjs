import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

// Datum der letzten fachlichen Prüfung regulatorischer Aussagen. Bei jeder
// inhaltlichen Aktualisierung anpassen; es wird in den strukturierten Daten geführt.
const reviewDate = '2026-08-07';

const pages = [
  {
    file: 'ki-gestuetzte-softwareentwicklung.html',
    title: 'KI-gestützte Softwareentwicklung für Unternehmen | Seleos',
    description: 'Seleos entwickelt Software mit KI – produktiv und kontrolliert: zwei erfahrene Entwickler, klare Architektur, automatisierte Qualitätssicherung und Security.',
    label: 'KI-gestützte Softwareentwicklung',
    h1: 'Software produktiv<br>mit KI entwickeln',
    lead: 'Wir nutzen KI-Werkzeuge im gesamten Engineering-Prozess, um Software zügig und mit kontrollierbarer Qualität zu entwickeln – mit klarer Architektur, automatisierten Tests, Security-Prüfungen und menschlicher Verantwortung.',
    problem: 'Viele Entwicklungsteams testen KI nur punktuell oder verlieren ihren Produktivitätsgewinn durch zusätzliche Abstimmung und Nacharbeit. Entscheidend ist ein belastbarer Engineering-Prozess, der KI bei Analyse, Implementierung, Tests, Reviews und Dokumentation gezielt einsetzt und die Ergebnisse systematisch absichert.',
    outcome: 'Sie erhalten produktive Software und nachvollziehbare Entwicklungsqualität – umgesetzt von zwei erfahrenen Entwicklern, die KI als Werkzeug einsetzen und Architektur, Security sowie fachliche Freigaben selbst verantworten.',
    image: 'assets/images/icon-webentwicklung.svg',
    imageAlt: 'Produktive KI-gestützte Softwareentwicklung',
    scope: ['Neue Funktionen und Softwaresysteme entwickeln', 'Bestehende Anwendungen modernisieren und erweitern', 'KI-Werkzeuge für Analyse und Implementierung einsetzen', 'Verbindliche Architektur- und Qualitätsregeln etablieren', 'Automatisierte Backend-, Frontend- und End-to-End-Tests', 'Security Reviews und technische Risikoprüfungen', 'Code Reviews, Dokumentation und nachvollziehbare Freigaben', 'CI/CD, Monitoring und kontrollierte Weiterentwicklung'],
    deliverables: [
      ['Engineering Assessment', 'Ausgangslage, Architektur, Qualitätsrisiken, geeignete KI-gestützte Arbeitsweise und ein priorisierter Umsetzungsplan.'],
      ['Entwicklungsprojekt', 'Produktive Funktionen oder Systeme mit klarer Architektur, automatisierten Tests, Security-Prüfungen und dokumentierter Übergabe.'],
      ['Kontinuierliche Weiterentwicklung', 'Planbare Entwicklungskapazität für Features, Modernisierung, Qualitätssicherung und laufende technische Verbesserung.']
    ],
    method: ['Ziel, Bestandssystem und Qualitätsanforderungen klären', 'Architekturregeln, Scope und messbare Abnahmekriterien festlegen', 'Software KI-gestützt und iterativ entwickeln', 'Ergebnisse automatisiert testen sowie fachlich und sicherheitstechnisch prüfen', 'Kontrolliert ausliefern, beobachten und weiterentwickeln'],
    faqs: [
      ['Was bedeutet KI-gestützte Softwareentwicklung bei Seleos?', 'Wir setzen spezialisierte KI-Werkzeuge für klar abgegrenzte Analyse-, Implementierungs-, Test-, Review- und Dokumentationsaufgaben ein. Architekturentscheidungen, Risikobewertung und Freigaben bleiben bei den verantwortlichen Entwicklern.'],
      ['Entwickelt Seleos nur Prototypen?', 'Nein. Wir entwickeln und betreuen produktive Software. KI unterstützt den Engineering-Prozess; Qualitätssicherung, Security, Integration und Betriebsfähigkeit sind feste Bestandteile der Umsetzung.'],
      ['Kann Seleos bestehende Software weiterentwickeln?', 'Ja. Wir analysieren vorhandene Anwendungen und Architekturen, priorisieren Risiken und übernehmen anschließend Modernisierung, Funktionserweiterung oder technische Stabilisierung.'],
      ['Wie wird die Qualität KI-gestützter Entwicklung abgesichert?', 'Durch verbindliche Architekturregeln, automatisierte Tests, statische Prüfungen, Code Reviews, Security-Gates und nachvollziehbare menschliche Freigaben.']
    ],
    related: [['Software bewerten lassen', 'software-architektur-bewertung.html'], ['Security prüfen', 'security-review-software.html'], ['Kontinuierlich weiterentwickeln', 'continuous-security-compliance-management.html']]
  },
  {
    file: 'software-architektur-bewertung.html',
    title: 'Software- & Architekturbewertung | Seleos GmbH',
    description: 'Unabhängige Bewertung bestehender Software: Architektur, Code, APIs, Cloud, Qualität, Security, KI-Einsatz, technische Schulden und Maßnahmenplan.',
    label: 'Software & Architecture Assessment',
    h1: 'Software und Architektur<br>unabhängig bewerten',
    lead: 'Wir analysieren bestehende, übernommene oder extern entwickelte Software und schaffen eine belastbare Entscheidungsgrundlage zu Qualität, Wartbarkeit, Security, Betrieb und Weiterentwicklung.',
    problem: 'Bei gewachsenen oder fremdentwickelten Systemen fehlen häufig eine aktuelle Architektursicht und eine neutrale Risikobewertung. Technische Schulden, unklare Datenflüsse und fragile Betriebsprozesse werden dann erst bei Änderungen, Sicherheitsvorfällen oder steigenden Kosten sichtbar.',
    outcome: 'Sie erhalten eine verständliche Gesamtbewertung, priorisierte Befunde und einen konkreten Maßnahmenplan mit Auswirkung, Aufwand und sinnvoller Reihenfolge.',
    image: 'assets/images/icon-technologieberatung.svg',
    imageAlt: 'Software- und Architekturbewertung',
    scope: ['Systemkontext, Komponenten und Datenflüsse', 'Code-Struktur, Abhängigkeiten und technische Schulden', 'APIs, Schnittstellen und Integrationsgrenzen', 'Cloud-, Deployment- und Betriebsarchitektur', 'Authentifizierung, Autorisierung und Mandantentrennung', 'Teststrategie, Qualitätssicherung und Release-Prozess', 'Performance, Skalierbarkeit und Observability', 'KI-Komponenten und regulatorisch relevante technische Lücken'],
    deliverables: [
      ['Management Summary', 'Verständliche Einordnung der wichtigsten Risiken, Auswirkungen und Handlungsoptionen für Entscheider.'],
      ['Technischer Review', 'Nachvollziehbare Befunde zu Architektur, Code, Datenflüssen, Betrieb, Qualität und Security.'],
      ['Priorisierter Maßnahmenplan', 'Konkrete Verbesserungen mit Risiko, Nutzen, Aufwand, Abhängigkeiten und empfohlener Reihenfolge.']
    ],
    method: ['Ziele, Entscheidungen und Systemgrenzen klären', 'Dokumentation, Code, Infrastruktur und Prozesse sichten', 'Architektur und Risiken mit dem Team validieren', 'Befunde und Handlungsoptionen priorisieren', 'Ergebnisse vorstellen und Umsetzung planen'],
    faqs: [
      ['Kann auch extern entwickelte Software geprüft werden?', 'Ja. Gerade bei Übernahmen, Anbieterwechseln oder unklarer technischer Qualität schafft eine unabhängige Bewertung Transparenz und eine belastbare Verhandlungs- und Planungsgrundlage.'],
      ['Ist Quellcodezugriff zwingend erforderlich?', 'Nicht immer. Eine Architektur- und Prozessbewertung kann mit Dokumentation, Interviews und Systemzugängen beginnen. Für belastbare Aussagen zu Codequalität und konkreten Implementierungsrisiken ist Quellcodezugriff sinnvoll.'],
      ['Erhalten wir nur eine Liste von Problemen?', 'Nein. Jeder wesentliche Befund wird eingeordnet und mit einer konkreten Empfehlung, Priorität und – soweit möglich – Aufwand und Abhängigkeiten verbunden.'],
      ['Kann Seleos die Verbesserungen anschließend umsetzen?', 'Ja. Wir können priorisierte Maßnahmen selbst umsetzen oder Ihr bestehendes Team bei Architektur, Remediation und Qualitätssicherung begleiten.']
    ],
    related: [['Security Review ergänzen', 'security-review-software.html'], ['NIS2-Prozesse bewerten', 'nis2-umsetzung.html'], ['CRA-Readiness prüfen', 'cyber-resilience-act.html']]
  },
  {
    file: 'security-review-software.html',
    title: 'Software Security Review & Architekturprüfung | Seleos',
    description: 'Security Review für Software, APIs, Cloud und KI-Systeme: Threat Modeling, Architektur, Code, Abhängigkeiten, Berechtigungen und Remediation.',
    label: 'Application Security',
    h1: 'Security Review für<br>Software und Architektur',
    lead: 'Wir bewerten Anwendungen, APIs, Cloud-nahe Architekturen und KI-Systeme risikobasiert und übersetzen Security-Befunde in konkrete, umsetzbare Verbesserungen.',
    problem: 'Automatische Scanner finden bekannte Muster, erklären aber selten das reale Produktrisiko. Kritische Schwächen entstehen oft an Systemgrenzen: in Rollenmodellen, Datenflüssen, Mandantentrennung, Geschäftslogik, Cloud-Konfiguration oder der Kombination mehrerer Komponenten.',
    outcome: 'Sie erhalten eine priorisierte Security-Bewertung mit nachvollziehbaren Angriffspfaden, geschäftlicher Auswirkung und konkreten Empfehlungen für Architektur, Code und Betrieb.',
    image: 'assets/images/icon-performance.svg',
    imageAlt: 'Software Security Review',
    scope: ['Threat Modeling, Assets und Trust Boundaries', 'Authentifizierung, Autorisierung und Rollenmodelle', 'Mandantentrennung und Datenzugriffe', 'API-, Eingabe- und Geschäftslogik-Sicherheit', 'Secrets, Schlüssel und Konfigurationsmanagement', 'Dependencies, SBOM und Software-Lieferkette', 'Cloud-, CI/CD- und Deployment-Sicherheit', 'KI-Agenten, Tool-Nutzung und Prompt-Injection-Risiken'],
    deliverables: [
      ['Risikoübersicht', 'Priorisierte Schwachstellen und Angriffspfade mit technischer und geschäftlicher Auswirkung.'],
      ['Technischer Befundbericht', 'Nachvollziehbare Evidenz, betroffene Komponenten und konkrete Behebungs- beziehungsweise Architekturvorschläge.'],
      ['Remediation & Retest', 'Begleitung der Behebung und erneute Prüfung, ob Maßnahmen wirksam und ohne neue Risiken umgesetzt wurden.']
    ],
    method: ['Scope, Assets und Schutzziele festlegen', 'Architektur und Datenflüsse modellieren', 'Code, Konfiguration und Prozesse prüfen', 'Befunde validieren und risikobasiert priorisieren', 'Remediation begleiten und Wirkung verifizieren'],
    faqs: [
      ['Was unterscheidet einen Security Review vom Penetrationstest?', 'Ein Security Review untersucht Architektur, Code, Konfiguration und Prozesse systematisch. Ein Penetrationstest versucht innerhalb eines vereinbarten Scopes praktisch, Schwachstellen auszunutzen. Beide Verfahren ergänzen sich.'],
      ['Kann ein Review vor der Entwicklung stattfinden?', 'Ja. Threat Modeling und Architekturreview sind besonders wirksam, bevor kritische Designentscheidungen umgesetzt werden. Dadurch lassen sich spätere und teure Korrekturen vermeiden.'],
      ['Werden auch KI- und LLM-Anwendungen geprüft?', 'Ja. Dazu gehören Datenzugriffe, Tool-Berechtigungen, Prompt Injection, Datenabfluss, unkontrollierte Aktionen, Freigabemechanismen und Monitoring.'],
      ['Unterstützt Seleos bei der Behebung?', 'Ja. Als Entwickler können wir Security-Empfehlungen selbst umsetzen oder gemeinsam mit Ihrem Team in Architektur, Code, Tests und Betrieb integrieren.']
    ],
    related: [['Penetrationstest durchführen', 'penetrationstest-webanwendungen-apis.html'], ['Architektur bewerten', 'software-architektur-bewertung.html'], ['KI-gestützte Entwicklung absichern', 'ki-gestuetzte-softwareentwicklung.html']]
  },
  {
    file: 'penetrationstest-webanwendungen-apis.html',
    title: 'Penetrationstest für Webanwendungen & APIs | Seleos',
    description: 'Autorisierte Penetrationstests für Webanwendungen, APIs und KI-Systeme mit klarem Scope, reproduzierbaren Befunden, Remediation und Retest.',
    label: 'Autorisierte Security-Tests',
    h1: 'Penetrationstests für<br>Webanwendungen und APIs',
    lead: 'Wir prüfen klar abgegrenzte Anwendungen, APIs und KI-gestützte Systeme auf praktisch ausnutzbare Schwachstellen und liefern reproduzierbare Befunde statt einer reinen Scanner-Ausgabe.',
    problem: 'Eine Anwendung kann alle automatischen Prüfungen bestehen und dennoch über Geschäftslogik, Rollenwechsel, API-Verkettungen oder fehlerhafte Systemgrenzen angreifbar sein. Ein manueller, risikobasierter Test untersucht genau diese realen Angriffspfade.',
    outcome: 'Sie erhalten einen verständlichen Executive Summary, technische Reproduktionsschritte, Risikoeinordnung, Behebungsempfehlungen und auf Wunsch einen dokumentierten Retest.',
    image: 'assets/images/icon-performance.svg',
    imageAlt: 'Penetrationstest für Webanwendungen und APIs',
    scope: ['Webanwendungen und Single-Page-Applications', 'REST-, GraphQL- und vergleichbare APIs', 'Authentifizierung, Sessions und Account-Flows', 'Autorisierung, Rollen und Mandantentrennung', 'Eingaben, Datei-Uploads und Geschäftslogik', 'Cloud-nahe Anwendungskonfigurationen', 'KI-Agenten, Prompts, Tools und Datenzugriffe', 'Verifikation bereits behobener Schwachstellen'],
    deliverables: [
      ['Rules of Engagement', 'Schriftlich vereinbarter Scope, Methoden, Testfenster, Ausschlüsse, Notfallkontakt und Abbruchkriterien.'],
      ['Penetrationstest-Bericht', 'Executive Summary sowie technische Findings mit Evidenz, Reproduktion, Auswirkung und Behebung.'],
      ['Retest-Nachweis', 'Erneute Prüfung behobener Findings mit dokumentiertem Status und verbleibendem Restrisiko.']
    ],
    method: ['Scope und schriftliche Autorisierung festlegen', 'Angriffsfläche und Testfälle vorbereiten', 'Manuelle und unterstützende technische Tests durchführen', 'Befunde sicher validieren und sofort eskalationsfähige Risiken melden', 'Bericht besprechen, Behebung begleiten und retesten'],
    faqs: [
      ['Welche Systeme testet Seleos?', 'Der anfängliche Schwerpunkt liegt auf Webanwendungen, APIs und KI-gestützten Systemen. Hardware, Funk, OT/ICS, Social Engineering und unvereinbarte Denial-of-Service-Tests gehören nicht automatisch zum Scope.'],
      ['Kann im Produktivsystem getestet werden?', 'Das hängt von Risiko, Architektur und Testmethoden ab. Scope, Testfenster, Daten, Rate Limits, Notfallkontakt und Ausschlüsse werden vorab verbindlich festgelegt. Häufig ist eine produktionsnahe getrennte Umgebung geeigneter.'],
      ['Wie werden kritische Findings gemeldet?', 'Kritische oder unmittelbar ausnutzbare Befunde werden nicht bis zum Abschlussbericht zurückgehalten, sondern über den vereinbarten Notfallkontakt zeitnah und vertraulich eskaliert.'],
      ['Ist ein Retest enthalten?', 'Ein Retest kann direkt als Bestandteil vereinbart oder nach der Remediation separat beauftragt werden. Er bestätigt, ob die konkrete Schwachstelle wirksam behoben wurde.']
    ],
    related: [['Security Review planen', 'security-review-software.html'], ['Softwarearchitektur bewerten', 'software-architektur-bewertung.html'], ['NIS2-Security umsetzen', 'nis2-umsetzung.html']]
  },
  {
    file: 'nis2-umsetzung.html',
    title: 'NIS2-Umsetzung & technische Prozesse | Seleos GmbH',
    description: 'Technische NIS2-Umsetzung: Gap- und Risikoanalyse, Security-Maßnahmen, Incident-Prozesse, Lieferkette, Nachweise und laufende Betreuung.',
    label: 'NIS2 & deutsches BSIG',
    h1: 'NIS2-Anforderungen<br>technisch umsetzen',
    lead: 'Wir überführen NIS2-Anforderungen in priorisierte technische und organisatorische Maßnahmen, gelebte Security-Prozesse und nachvollziehbare Evidenzen – und begleiten die Umsetzung bei Bedarf dauerhaft.',
    problem: 'NIS2 ist kein reines Dokumentationsprojekt. Risiken, Verantwortlichkeiten, Incident-Prozesse, Lieferkette, Zugriffe, Schwachstellen und Wiederanlauf müssen in vorhandene Systeme und Arbeitsweisen integriert werden. Eine Gap-Liste allein verändert den Betrieb nicht.',
    outcome: 'Sie erhalten Transparenz über relevante Lücken, ein priorisiertes Maßnahmenregister und praktisch etablierte Prozesse, Kontrollen und Nachweise für die technische NIS2-Umsetzung.',
    image: 'assets/images/icon-cloud.svg',
    imageAlt: 'Technische NIS2-Umsetzung',
    scope: ['Technische Vorprüfung und Scope-Klärung', 'Cybersecurity-Risiko- und Maßnahmenmanagement', 'Rollen, Verantwortung und Management-Reporting', 'Incident Response und Meldeprozesse', 'Business Continuity, Backup und Wiederanlauf', 'Zugriffs-, Schwachstellen- und Patchmanagement', 'Lieferanten- und Dienstleisterrisiken', 'Evidenzen, Übungen und kontinuierliche Verbesserung'],
    deliverables: [
      ['NIS2 Readiness Assessment', 'Bestandsaufnahme, Gap- und Risikoanalyse sowie priorisierte Handlungsfelder und Sofortmaßnahmen.'],
      ['Technical Implementation Sprint', 'Einführung ausgewählter Kontrollen, Prozesse, Rollen, Templates und technischer Verbesserungen.'],
      ['Security & Compliance Operations', 'Regelmäßige Maßnahmen-, Risiko- und Evidence-Reviews sowie definierte Kapazität für technische Umsetzung.']
    ],
    method: ['Scope und vorhandene Verantwortlichkeiten klären', 'Systeme, Risiken und bestehende Kontrollen analysieren', 'Maßnahmen nach Risiko und Umsetzbarkeit priorisieren', 'Prozesse und technische Kontrollen gemeinsam etablieren', 'Wirksamkeit, Evidenzen und Verbesserungszyklus verankern'],
    timeline: {
      label: 'Regulatorischer Stand',
      heading: 'NIS2 gilt bereits – was das konkret bedeutet',
      intro: 'Das deutsche NIS2-Umsetzungsgesetz ist in Kraft. Die Pflichten sind damit keine Vorbereitung auf die Zukunft mehr, sondern geltendes Recht. Die folgende Übersicht ordnet die technisch relevanten Punkte ein.',
      items: [
        {
          date: '2025-12-06',
          dateLabel: '6. Dezember 2025',
          state: 'in Kraft',
          title: 'BSIG in der NIS2-Fassung gilt',
          text: 'Das NIS2-Umsetzungsgesetz ist seit diesem Tag in Kraft. Registrierungs-, Melde- und Risikomanagementpflichten für besonders wichtige und wichtige Einrichtungen gelten seitdem.'
        },
        {
          state: 'laufend',
          title: 'Registrierung beim BSI liegt bei Ihnen',
          text: 'Betroffene Einrichtungen müssen sich selbst beim BSI registrieren und ihre Angaben aktuell halten. Die Betroffenheit wird nicht behördlich zugewiesen – wer sie nicht prüft, versäumt die Frist unbemerkt.'
        },
        {
          state: 'im Ernstfall',
          title: 'Meldekette: 24 Stunden, 72 Stunden, ein Monat',
          text: 'Bei einem erheblichen Sicherheitsvorfall sind eine Erstmeldung binnen 24 Stunden, eine Folgemeldung binnen 72 Stunden und eine Abschlussmeldung binnen eines Monats vorgesehen. Diese Fristen hält nur, wer Erkennung, Bewertung, Zuständigkeit und Meldeweg vorher geübt hat.'
        },
        {
          state: 'dauerhaft',
          title: 'Die Geschäftsleitung ist persönlich in der Pflicht',
          text: 'Leitungsorgane müssen die Risikomanagementmaßnahmen billigen, ihre Umsetzung überwachen und sich schulen lassen. Ein rein an die IT delegiertes NIS2-Projekt erfüllt diese Anforderung nicht.'
        }
      ],
      sources: [
        ['Bundesgesetzblatt 2025 I Nr. 301', 'https://www.recht.bund.de/bgbl/1/2025/301/VO.html'],
        ['BSI: NIS2-Registrierung und Meldepflichten', 'https://mip2.bsi.bund.de/de/info-nis2-registrierung/'],
        ['Geltendes BSI-Gesetz (gesetze-im-internet.de)', 'https://www.gesetze-im-internet.de/bsig_2025/BJNR12D0B0025.html'],
        ['EU-Kommission: NIS2-Richtlinie', 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive']
      ]
    },
    faqs: [
      ['Stellt Seleos die rechtliche NIS2-Betroffenheit fest?', 'Wir unterstützen bei der technischen Vorprüfung und bei der Erhebung relevanter Unternehmens- und Systemdaten. Eine verbindliche rechtliche Einzelfallprüfung ist Rechtsberatung und nicht Bestandteil unserer Leistung.'],
      ['Reicht eine NIS2-Gap-Analyse aus?', 'Nein. Sie ist ein sinnvoller Ausgangspunkt. Entscheidend sind anschließend priorisierte Umsetzung, klare Verantwortlichkeiten, gelebte Incident- und Risikoprozesse sowie überprüfbare Evidenzen.'],
      ['Kann Seleos technische Maßnahmen direkt umsetzen?', 'Ja. Wir unterstützen nicht nur bei Prozessen und Dokumentation, sondern auch bei Architektur, Zugriffen, Logging, Schwachstellenmanagement, Automatisierung, Tests und weiteren technischen Maßnahmen.'],
      ['Ist eine laufende Betreuung möglich?', 'Ja. Risiken, Systeme, Lieferanten und Bedrohungen verändern sich. Wir können Maßnahmenregister und Evidenzen regelmäßig prüfen und definierte technische Umsetzungskapazität bereitstellen.']
    ],
    related: [['Security Review durchführen', 'security-review-software.html'], ['CRA für Softwareprodukte', 'cyber-resilience-act.html'], ['Laufende Betreuung etablieren', 'continuous-security-compliance-management.html']]
  },
  {
    file: 'cyber-resilience-act.html',
    title: 'Cyber Resilience Act für Softwarehersteller | Seleos',
    description: 'CRA-Umsetzung für Softwarehersteller: Risikobewertung, Secure Development, SBOM, Vulnerability Handling, Meldung, technische Dokumentation und Evidence.',
    label: 'Cyber Resilience Act',
    h1: 'CRA-Prozesse für<br>Softwareprodukte etablieren',
    lead: 'Wir unterstützen Softwarehersteller dabei, Anforderungen des Cyber Resilience Act in Produktarchitektur, Secure Development, Schwachstellenmanagement, technische Dokumentation und laufende Nachweise zu integrieren.',
    problem: 'Der CRA betrifft nicht nur den Release eines Produkts. Hersteller benötigen einen durchgängigen Prozess von Cybersecurity-Risikobewertung und Komponentenmanagement über Security Updates bis zu Schwachstellen- und Vorfallmeldungen während des Supportzeitraums.',
    outcome: 'Sie erhalten eine technische CRA-Gap-Analyse, einen priorisierten Umsetzungsplan und belastbare Entwicklungs-, Vulnerability- und Evidence-Prozesse als Vorbereitung auf die formelle Konformitätsbewertung.',
    image: 'assets/images/icon-cloud.svg',
    imageAlt: 'Cyber Resilience Act für Softwarehersteller',
    scope: ['Produkt-Scope und technische Klassifizierungsgrundlagen', 'Cybersecurity-Risikobewertung des Produkts', 'Secure Development Lifecycle und Security by Design', 'Komponenten-, Dependency- und SBOM-Prozess', 'Vulnerability Handling und Coordinated Disclosure', 'Security Updates, Supportzeitraum und Nutzerinformationen', 'Schwachstellen- und Vorfallmeldeprozess', 'Technische Dokumentation und Evidence Map'],
    deliverables: [
      ['CRA Product Readiness Assessment', 'Technische Gap- und Risikobewertung des Produkts, seiner Komponenten und Entwicklungsprozesse.'],
      ['Secure Development & Evidence Program', 'Etablierte Prozesse, Kontrollen, Verantwortlichkeiten, Vorlagen und technische Nachweise.'],
      ['Remediation & laufende Pflege', 'Technische Behebung identifizierter Lücken und kontinuierliche Aktualisierung von SBOM, Risiken und Evidenzen.']
    ],
    method: ['Produkt, Rollen, Komponenten und Supportmodell erfassen', 'Risiken und bestehende Entwicklungsprozesse bewerten', 'CRA-Anforderungen auf Kontrollen und Evidenzen abbilden', 'Prozesse und technische Maßnahmen implementieren', 'Readiness prüfen und laufende Pflege etablieren'],
    timeline: {
      label: 'Fristen',
      heading: 'Die CRA-Meldepflichten greifen zuerst',
      intro: 'Die Verordnung (EU) 2024/2847 gilt gestaffelt. Der für Hersteller kritische Punkt ist nicht 2027, sondern die Meldepflicht: Sie greift deutlich früher und setzt einen funktionierenden Erkennungs- und Meldeprozess voraus, der nicht kurzfristig aufgebaut werden kann.',
      items: [
        {
          date: '2024-12-10',
          dateLabel: '10. Dezember 2024',
          state: 'in Kraft',
          title: 'CRA in Kraft getreten',
          text: 'Die Verordnung ist in Kraft, die Pflichten greifen jedoch gestaffelt. Der Zeitraum bis zur vollen Anwendbarkeit ist als Umsetzungsfenster gedacht, nicht als Karenzzeit.'
        },
        {
          date: '2026-06-11',
          dateLabel: '11. Juni 2026',
          state: 'gilt',
          title: 'Regeln für Konformitätsbewertungsstellen',
          text: 'Die Bestimmungen zu notifizierenden Behörden und Konformitätsbewertungsstellen werden anwendbar. Für Hersteller kritischer Produktklassen entsteht damit die Infrastruktur, die später für die Bewertung benötigt wird.'
        },
        {
          date: '2026-09-11',
          dateLabel: '11. September 2026',
          state: 'kritisch',
          highlight: true,
          countdown: true,
          title: 'Meldepflichten für Hersteller greifen',
          text: 'Aktiv ausgenutzte Schwachstellen und schwerwiegende Sicherheitsvorfälle müssen gemeldet werden – Frühwarnung binnen 24 Stunden, Meldung binnen 72 Stunden. Wer bis dahin keinen belastbaren Prozess für Erkennung, Bewertung, Zuständigkeit und Meldeweg hat, kann diese Fristen im Ernstfall nicht einhalten.'
        },
        {
          date: '2027-12-11',
          dateLabel: '11. Dezember 2027',
          state: 'vollständig',
          title: 'Hauptpflichten werden anwendbar',
          text: 'Die wesentlichen Cybersicherheitsanforderungen, die Schwachstellenbehandlung über den Supportzeitraum, technische Dokumentation, Komponenteninformationen sowie Konformitätsbewertung und CE-Kennzeichnung gelten vollständig.'
        }
      ],
      sources: [
        ['Verordnung (EU) 2024/2847 (EUR-Lex)', 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2847'],
        ['EU-Kommission: Cyber Resilience Act', 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act']
      ]
    },
    faqs: [
      ['Für welche Produkte ist der CRA relevant?', 'Der CRA gilt grundsätzlich für Produkte mit digitalen Elementen, die auf dem EU-Markt bereitgestellt werden und direkt oder indirekt mit Geräten oder Netzen verbunden sind. Ausnahmen und die konkrete Einordnung müssen im Einzelfall geprüft werden.'],
      ['Führt Seleos die formelle Konformitätsbewertung durch?', 'Nein. Wir unterstützen technisch bei Risikobewertung, Prozessen, Maßnahmen, Dokumentation und Evidence. Formelle Konformitätsbewertung, Zertifizierung und Rechtsberatung sind nicht Bestandteil unserer Leistung.'],
      ['Warum sind SBOM und Vulnerability Handling wichtig?', 'Hersteller müssen Komponentenrisiken kennen, Schwachstellen während des Supportzeitraums behandeln und Security Updates bereitstellen können. Ein gepflegter Komponenten- und Schwachstellenprozess schafft dafür die Grundlage.'],
      ['Kann Seleos bestehende Entwicklungsprozesse anpassen?', 'Ja. Wir integrieren Security-Anforderungen in vorhandene Architektur-, Entwicklungs-, CI/CD-, Test-, Release- und Supportprozesse, statt einen parallelen Papierprozess aufzubauen.']
    ],
    related: [['Softwarearchitektur bewerten', 'software-architektur-bewertung.html'], ['Security Review durchführen', 'security-review-software.html'], ['Evidence laufend pflegen', 'continuous-security-compliance-management.html']]
  },
  {
    file: 'continuous-security-compliance-management.html',
    title: 'Continuous Security & Compliance Management | Seleos',
    description: 'Laufende technische Betreuung für Softwarequalität, Security, NIS2- und CRA-Maßnahmen, SBOM, Evidenzen, Reviews und Remediation.',
    label: 'Laufende technische Betreuung',
    h1: 'Security und Compliance<br>kontinuierlich betreiben',
    lead: 'Wir übernehmen definierte technische Verantwortung für wiederkehrende Security-, Qualitäts- und Compliance-Aufgaben – mit festem Rhythmus, transparentem Maßnahmenregister und direkter Umsetzungskapazität.',
    problem: 'Assessments schaffen Transparenz, lösen aber noch keine dauerhafte Betriebsaufgabe. Software, Abhängigkeiten, Bedrohungen, Lieferanten und regulatorische Anforderungen verändern sich laufend. Ohne klare Zuständigkeit veralten Maßnahmen, SBOMs, Evidenzen und Notfallprozesse schnell.',
    outcome: 'Sie erhalten einen verlässlichen Verbesserungszyklus, aktuelle technische Nachweise und erfahrene Umsetzungskapazität, ohne dafür eine zusätzliche interne Koordinationsstruktur aufzubauen.',
    image: 'assets/images/icon-cloud.svg',
    imageAlt: 'Laufendes Security und Compliance Management',
    scope: ['Regelmäßige Architektur- und Security-Reviews', 'Pflege von Risiko- und Maßnahmenregistern', 'Dependency-, Schwachstellen- und SBOM-Reviews', 'Technische NIS2- und CRA-Evidenzen', 'Remediation und Security Updates', 'Incident-Prozesse, Übungen und Lessons Learned', 'Qualität und Wirksamkeit KI-gestützter Entwicklungsprozesse', 'Management-Status und priorisierte nächste Schritte'],
    deliverables: [
      ['Monatlicher Control Cycle', 'Vereinbarte Reviews, aktualisierte Risiken und Maßnahmen sowie ein klarer Status zu offenen technischen Aufgaben.'],
      ['Evidence & Readiness Pflege', 'Aktuelle Nachweise, Prozessartefakte, SBOM- und Vulnerability-Informationen für NIS2- und CRA-relevante Abläufe.'],
      ['Engineering Capacity', 'Definierte Kapazität für Remediation, Automatisierung, Tests und kontrollierte Weiterentwicklung.']
    ],
    method: ['Verantwortungsbereich und Service-Rhythmus festlegen', 'Backlog, Risiken, Kontrollen und Evidenzen übernehmen', 'Regelmäßige Reviews und technische Prüfungen durchführen', 'Maßnahmen direkt umsetzen oder mit dem Team koordinieren', 'Wirksamkeit berichten und Prioritäten fortschreiben'],
    faqs: [
      ['Ist die laufende Betreuung ein Managed Service?', 'Ja, innerhalb eines klar vereinbarten technischen Verantwortungsbereichs. Umfang, Rhythmus, Reaktionswege, verfügbare Umsetzungskapazität und Abgrenzungen werden transparent festgelegt.'],
      ['Muss vorher ein Assessment stattfinden?', 'Nicht zwingend, aber eine strukturierte Bestandsaufnahme ist meist der sinnvollste Einstieg. Vorhandene Risiko-, Maßnahmen- und Evidence-Artefakte können übernommen und weitergeführt werden.'],
      ['Ersetzt der Service interne Verantwortliche?', 'Nein. Management- und gesetzliche Verantwortung verbleiben beim Unternehmen. Wir schaffen technische Transparenz, übernehmen vereinbarte operative Aufgaben und arbeiten direkt mit den zuständigen Personen zusammen.'],
      ['Kann der Umfang angepasst werden?', 'Ja. Der Service kann mit einem kleinen monatlichen Review-Zyklus beginnen und bei Remediation, Produktänderungen, Audits oder Vorfällen um definierte Engineering-Kapazität erweitert werden.']
    ],
    related: [['NIS2 technisch umsetzen', 'nis2-umsetzung.html'], ['CRA-Prozesse etablieren', 'cyber-resilience-act.html'], ['Security Review durchführen', 'security-review-software.html']]
  },
  {
    file: 'technologieberatung-berlin.html',
    title: 'Technologieberatung Berlin | Seleos GmbH',
    description: 'Technologieberatung in Berlin: Anforderungen, Architektur, Softwareauswahl, PHP-/Websysteme, Cloud, Migration, Schnittstellen und Qualitätssicherung.',
    label: 'Technologieberatung aus Umsetzungspraxis',
    h1: 'Technologieberatung<br>Berlin',
    lead: 'Wir bewerten Anforderungen, bestehende Systeme und technische Optionen, bevor Entwicklung teuer wird – verständlich für Entscheider und belastbar für die anschließende Umsetzung.',
    problem: 'Technologieentscheidungen wirken über Jahre auf Budget, Betrieb und Veränderbarkeit. Ohne klare Anforderungen und neutrale Bewertung entstehen überdimensionierte Plattformen, schwer wartbare Eigenentwicklungen oder Abhängigkeiten, die erst spät sichtbar werden.',
    outcome: 'Sie erhalten realistische Handlungsoptionen mit Aufwand, Risiken, Abhängigkeiten und erwartetem Nutzen – passend zu Geschäftsmodell, Team und vorhandener Systemlandschaft.',
    image: 'assets/images/icon-technologieberatung.svg',
    imageAlt: 'Technologieberatung für Software und Cloud',
    scope: ['Anforderungserhebung und technische Konzeption', 'Software- und Architekturentscheidungen', 'Bewertung bestehender PHP-, Web-, Shop- und Cloud-Systeme', 'Modernisierungs- und Migrationsplanung', 'Make-or-Buy sowie Software- und Framework-Auswahl', 'Schnittstellen, Datenflüsse und Integrationsgrenzen', 'Enterprise Search mit Solr oder Elasticsearch', 'Code-Reviews, Qualitätssicherung und technische Projektsteuerung'],
    deliverables: [
      ['Technology Assessment', 'Strukturierte Bewertung von Anforderungen, Systemen, Risiken und technischen Handlungsoptionen.'],
      ['Entscheidungs- und Zielbild', 'Verständliche Empfehlung zu Architektur, Plattform, Eigenentwicklung, Standardsoftware und sinnvollen Integrationen.'],
      ['Umsetzungsbegleitung', 'Technische Konzeption, Reviews, Qualitätssicherung und auf Wunsch direkte Realisierung der priorisierten Lösung.']
    ],
    method: ['Geschäftliches Ziel und Entscheidungsbedarf klären', 'Anforderungen, Systeme und Abhängigkeiten erfassen', 'Optionen technisch und wirtschaftlich bewerten', 'Zielbild und priorisierte Empfehlung abstimmen', 'Umsetzung, Migration oder Auswahlprozess begleiten'],
    faqs: [
      ['Wann ist Technologieberatung sinnvoll?', 'Vor Neuentwicklung, Modernisierung, Migration, Anbieterwechsel oder größeren Plattformentscheidungen. Eine frühe Bewertung reduziert Fehlentscheidungen und macht Folgekosten sichtbar.'],
      ['Berät Seleos unabhängig von bestimmten Herstellern?', 'Ja. Wir bewerten Eigenentwicklung, Open Source, Standardsoftware und Cloud-Dienste nach Anforderungen, Risiken, Integrationsfähigkeit, Betrieb und Gesamtkosten.'],
      ['Kann auch ein bestehendes System bewertet werden?', 'Ja. Wir analysieren Architektur, Schnittstellen, Wartbarkeit, Security, Performance, Qualitätssicherung und Modernisierungsoptionen vorhandener Systeme.'],
      ['Übernimmt Seleos anschließend die Umsetzung?', 'Ja. Empfehlungen entstehen aus praktischer Entwicklungserfahrung. Wir können MVP, Migration, Integration, Reviews und Qualitätssicherung anschließend selbst übernehmen.']
    ],
    related: [['Softwarearchitektur bewerten', 'software-architektur-bewertung.html'], ['Cloud-Architektur planen', 'cloud-development.html'], ['Websoftware entwickeln', 'webentwicklung-berlin.html']]
  },
  {
    file: 'cloud-development.html',
    title: 'Cloud Development Berlin | Seleos GmbH',
    description: 'Cloud Development Berlin: Cloud-Architektur, Migration, Deployment, Monitoring, Backups, Skalierung, Sicherheit und Betrieb von Webanwendungen.',
    label: 'Cloud Development & Operations',
    h1: 'Cloud Development<br>Berlin',
    lead: 'Wir entwickeln und betreiben Cloud-Lösungen für Webanwendungen, Shops, APIs und interne Systeme – passend zu Anwendung, Team, Datenschutz, erwarteter Last und laufendem Budget.',
    problem: 'Cloud-Projekte scheitern selten am einzelnen Dienst, sondern an unklarer Architektur, manuellen Deployments, fehlender Beobachtbarkeit oder unterschätzten Betriebs- und Kostenfragen. Auch eine vollständige Migration ist nicht immer der sinnvollste erste Schritt.',
    outcome: 'Sie erhalten eine wartbare Cloud-Architektur mit kontrollierbarer Migration, automatisierten Abläufen, transparentem Betrieb und nachvollziehbaren Kosten.',
    image: 'assets/images/icon-cloud.svg',
    imageAlt: 'Cloud Development und Cloud-Architektur',
    scope: ['Cloud-Architektur für Webanwendungen, APIs und Datenprozesse', 'Migration bestehender Anwendungen und hybride Szenarien', 'Bewertung von SaaS-, PaaS- und IaaS-Angeboten', 'CI/CD und automatisierte Deployments', 'Backups, Wiederanlauf und getrennte Umgebungen', 'Logging, Monitoring und Alerting', 'Skalierung, Performance und Kostenkontrolle', 'Zugriffe, Updates, Secrets und Cloud Security'],
    deliverables: [
      ['Cloud Architecture Assessment', 'Bewertung von Anwendung, Last, Daten, Betrieb und Cloud-Optionen mit konkretem Zielbild.'],
      ['Migration & Automation Plan', 'Schrittweise Migrationsplanung einschließlich Deployment, Daten, Backups, Risiken und Rückfalloptionen.'],
      ['Cloud Operations Baseline', 'Automatisierte Deployments, Monitoring, Alerts, Backups und dokumentierte Betriebsabläufe.']
    ],
    method: ['Anwendung, Daten, Last und Betriebsanforderungen erfassen', 'Cloud- und Hybridoptionen bewerten', 'Zielarchitektur und Migrationsschritte planen', 'Infrastruktur, Deployment und Observability umsetzen', 'Betrieb, Kosten und Sicherheit kontinuierlich verbessern'],
    faqs: [
      ['Muss eine Anwendung vollständig in die Cloud migriert werden?', 'Nein. Hybride oder schrittweise Ansätze sind oft risikoärmer. Wir bewerten, welche Komponenten zuerst migriert werden sollten und welche zunächst bestehen bleiben können.'],
      ['Unterstützt Seleos mehrere Cloud-Anbieter?', 'Ja. Die Auswahl richtet sich nach Anforderungen, vorhandener Infrastruktur, Kompetenzen, Datenschutz, Integrationen und Kosten statt nach einer pauschalen Plattformvorgabe.'],
      ['Gehören Monitoring und Backups zur Umsetzung?', 'Ja. Logging, Monitoring, Alerts, Backups und Wiederanlauf sind Bestandteile eines belastbaren Betriebsmodells und werden früh berücksichtigt.'],
      ['Kann Seleos bestehende Cloud-Kosten prüfen?', 'Ja. Wir analysieren Ressourcen, Architektur, Skalierung und genutzte Dienste und priorisieren Einsparungen, ohne Stabilität und Betriebssicherheit zu gefährden.']
    ],
    related: [['Technologieentscheidung vorbereiten', 'technologieberatung-berlin.html'], ['Softwarearchitektur bewerten', 'software-architektur-bewertung.html'], ['Security Review durchführen', 'security-review-software.html']]
  },
  {
    file: 'webentwicklung-berlin.html',
    title: 'Softwareentwicklung & Webentwicklung Berlin | Seleos GmbH',
    description: 'Individuelle Softwareentwicklung und Webentwicklung in Berlin: Webanwendungen, APIs, Portale, React, Backend, Schnittstellen und Wartung.',
    label: 'Individuelle Software- & Webentwicklung',
    h1: 'Softwareentwicklung &<br>Webentwicklung Berlin',
    lead: 'Wir entwickeln individuelle Webanwendungen, APIs, Portale und interne Tools, wenn Standard-Websites oder Baukastensysteme Geschäftsprozesse, Rollen und Datenflüsse nicht ausreichend abbilden.',
    problem: 'Geschäftskritische Websoftware muss mehr leisten als eine gute Oberfläche. Frontend, Geschäftslogik, APIs, Datenbanken, Integrationen und Betrieb müssen zusammenpassen und langfristig erweiterbar bleiben.',
    outcome: 'Sie erhalten eine wartbare Webanwendung mit klarer Architektur, priorisierten Funktionen, responsiver Bedienung und einer technischen Basis für Betrieb und Weiterentwicklung.',
    image: 'assets/images/icon-webentwicklung.svg',
    imageAlt: 'Individuelle Softwareentwicklung und Webentwicklung',
    scope: ['Individuelle Webanwendungen und Business-Software', 'Kundenportale, Backoffice und interne Tools', 'Frontend-Entwicklung mit HTML, CSS, JavaScript und React', 'Backend-Entwicklung, APIs und Datenbanken', 'Schnittstellen und Anbindung bestehender Systeme', 'Responsive Design und komplexe Formulare oder Workflows', 'SEO-Grundlagen, Performance und Barrierearmut', 'Wartung, Modernisierung und schrittweise Weiterentwicklung'],
    deliverables: [
      ['Discovery & Zielarchitektur', 'Priorisierte Anforderungen, Nutzerabläufe, Integrationen und eine tragfähige technische Architektur.'],
      ['Produktionsnahe Umsetzung', 'Frontend, Backend, APIs, Datenbank und Tests als integrierte, betreibbare Anwendung.'],
      ['Weiterentwicklung & Betrieb', 'Fehleranalyse, Modernisierung, neue Funktionen, Qualitätssicherung und langfristige technische Betreuung.']
    ],
    method: ['Geschäftsprozess, Nutzer und Systemgrenzen verstehen', 'Funktionen und Integrationen priorisieren', 'Architektur und Bedienkonzept validieren', 'Iterativ entwickeln, integrieren und automatisiert prüfen', 'Kontrolliert einführen und langfristig weiterentwickeln'],
    faqs: [
      ['Welche Anwendungen entwickelt Seleos?', 'Typische Projekte sind Kundenportale, interne Tools, Administrationsoberflächen, Buchungsstrecken, Konfiguratoren, API-Backends und Erweiterungen bestehender Systeme.'],
      ['Entwickelt Seleos Frontend und Backend?', 'Ja. Als Fullstack-Entwickler verbinden wir Oberfläche, Geschäftslogik, APIs, Datenbanken, Integrationen und Betrieb.'],
      ['Kann eine bestehende Anwendung übernommen werden?', 'Ja. Wir analysieren die vorhandene Codebasis und übernehmen Erweiterungen, Fehleranalyse, Modernisierung und die schrittweise Ablösung veralteter Komponenten.'],
      ['Werden Performance und Barrierearmut berücksichtigt?', 'Ja. Responsive Design, semantische HTML-Struktur, Performance, SEO-Grundlagen und barrierearme Bedienung werden bereits in Konzeption und Entwicklung einbezogen.']
    ],
    related: [['KI-gestützt entwickeln', 'ki-gestuetzte-softwareentwicklung.html'], ['PHP-Anwendung weiterentwickeln', 'php-programmierung-berlin.html'], ['Cloud-Betrieb planen', 'cloud-development.html']]
  },
  {
    file: 'php-programmierung-berlin.html',
    title: 'PHP-Entwicklung & PHP-Programmierung Berlin | Seleos GmbH',
    description: 'PHP-Entwicklung in Berlin: Symfony, Laravel, Zend Framework, Legacy-Modernisierung, APIs, Datenbanken, Schnittstellen und Wartung.',
    label: 'PHP Engineering & Modernisierung',
    h1: 'PHP-Entwicklung &<br>PHP-Programmierung Berlin',
    lead: 'Wir entwickeln, erweitern und modernisieren PHP-Anwendungen mit Fokus auf wartbare Architektur, sichere Schnittstellen, saubere Datenbanklogik und pragmatische Weiterentwicklung im laufenden Betrieb.',
    problem: 'Komplexe PHP-Projekte scheitern selten an einzelnen Codezeilen. Gewachsene Strukturen, veraltete Frameworks, fehlende Tests und unklare Prioritäten erhöhen Risiken und machen selbst kleine Änderungen teuer.',
    outcome: 'Sie erhalten eine belastbare PHP-Codebasis, priorisierte Modernisierungsschritte und direkte Entwicklungskapazität für APIs, Portale, Backoffice und geschäftskritische Websoftware.',
    image: 'assets/images/icon-php.svg',
    imageAlt: 'PHP-Entwicklung mit Symfony und Laravel',
    scope: ['PHP-Entwicklung mit Symfony, Laravel und Zend Framework', 'Analyse und Modernisierung von Legacy-PHP', 'Refactoring und Abbau technischer Schulden', 'APIs, Backoffice-Systeme und Webanwendungen', 'Datenbankdesign und Query-Optimierung', 'MySQL, MariaDB und Microsoft SQL Server', 'Payment, Enterprise Search, BI und externe Dienste', 'Code-Reviews, Security, Performance und Wartung'],
    deliverables: [
      ['PHP & Legacy Assessment', 'Bewertung von Architektur, Frameworks, Datenbank, Security, Performance, Tests und Modernisierungsrisiken.'],
      ['Entwicklung & Modernisierung', 'Neue Funktionen, APIs, Refactoring und schrittweise Erneuerung ohne unnötige Unterbrechung laufender Prozesse.'],
      ['Wartung & Enablement', 'Langfristige Weiterentwicklung, Fehleranalyse, Reviews und bei Bedarf individuell zugeschnittene PHP-Trainings.']
    ],
    method: ['Geschäftskritische Abläufe und Codebasis erfassen', 'Risiken, technische Schulden und Abhängigkeiten priorisieren', 'Zielarchitektur und sichere Migrationsschritte festlegen', 'Funktionen und Refactorings iterativ umsetzen', 'Tests, Betrieb und kontinuierliche Wartung verankern'],
    faqs: [
      ['Übernimmt Seleos ältere PHP-Anwendungen?', 'Ja. Wir analysieren individuelle Codebasen sowie Anwendungen mit Symfony, Laravel oder Zend Framework und planen eine schrittweise, risikoarme Modernisierung.'],
      ['Muss ein Legacy-System vollständig neu geschrieben werden?', 'Nein. Häufig ist eine priorisierte Modernisierung wirtschaftlicher. Kritische Bereiche werden abgesichert und schrittweise ersetzt, während der laufende Betrieb erhalten bleibt.'],
      ['Entwickelt Seleos auch APIs und Integrationen?', 'Ja. Dazu gehören REST- und andere APIs, Payment, Suchlösungen, BI, Datenbanken sowie die Anbindung externer Unternehmenssysteme.'],
      ['Sind individuelle PHP-Trainings möglich?', 'Ja, nach Abstimmung. Inhalte und Übungen werden auf den Erfahrungsstand, die verwendeten Frameworks und konkrete Anforderungen des Teams zugeschnitten.']
    ],
    related: [['Softwarearchitektur bewerten', 'software-architektur-bewertung.html'], ['Websoftware entwickeln', 'webentwicklung-berlin.html'], ['Performance analysieren', 'performanceoptimierung-berlin.html']]
  },
  {
    file: 'shopify-development.html',
    title: 'Shopify Entwicklung & API Integration Berlin | Seleos GmbH',
    description: 'Shopify Entwicklung in Berlin: Theme-Entwicklung, Shopify API, Schnittstellen zu ERP, PIM, Logistik, Payment und individuelle Shop-Funktionen.',
    label: 'Shopify Engineering & Integration',
    h1: 'Shopify Entwicklung &<br>API Integration Berlin',
    lead: 'Wir entwickeln Shopify-Shops, Themes, Schnittstellen und individuelle Funktionen für Unternehmen, die mehr benötigen als eine Standardinstallation.',
    problem: 'Wachsende Shops werden durch manuelle Datenpflege, unkontrollierte Apps und fragile Schnittstellen schnell komplex. Theme, Datenmodell, APIs, ERP, PIM, Logistik, Payment und Betrieb müssen als zusammenhängendes System geplant werden.',
    outcome: 'Sie erhalten einen performanten, wartbaren Shopify-Shop mit belastbaren Integrationen und Prozessen, die zu Sortiment, Marke und internen Abläufen passen.',
    image: 'assets/images/icon-shopify.svg',
    imageAlt: 'Shopify Entwicklung und API Integration',
    scope: ['Shopify Theme Entwicklung und Storefronts', 'Shopify Admin API, Webhooks und externe Backends', 'ERP-, Warenwirtschafts- und PIM-Integration', 'Logistik, Payment, CRM und Marketing-Systeme', 'Produkt-, Kunden- und Bestelldatenmigration', 'B2B-Prozesse, Preislogik und Produktkonfiguration', 'App-, Liquid-, Tracking- und Bild-Performance', 'Relaunch, Wartung und laufende technische Betreuung'],
    deliverables: [
      ['Shopify Solution Assessment', 'Bewertung von Standardfunktionen, Apps, Theme, Datenmodell, Integrationen und individuellen Anforderungen.'],
      ['Storefront & Integration', 'Umgesetztes Theme, APIs, Webhooks, Datenflüsse und individuelle Funktionen für belastbare Shopprozesse.'],
      ['Migration & Betreuung', 'Kontrollierte Datenmigration, Performance-Optimierung, Fehleranalyse und laufende technische Weiterentwicklung.']
    ],
    method: ['Sortiment, Prozesse und vorhandene Systeme erfassen', 'Shopify-Standard, Apps und Eigenentwicklung bewerten', 'Datenmodell, Integrationen und Migration planen', 'Theme, Schnittstellen und Funktionen umsetzen', 'Shop kontrolliert einführen, messen und weiterentwickeln'],
    faqs: [
      ['Wann ist eine individuelle Shopify-Entwicklung sinnvoll?', 'Wenn Standard-Theme und Apps Geschäftsprozesse, Datenflüsse, B2B-Logik oder Integrationen nicht zuverlässig und wartbar abbilden.'],
      ['Welche Systeme können angebunden werden?', 'Typisch sind ERP, Warenwirtschaft, PIM, Logistik, Payment, CRM, Marketing-Systeme und individuelle Backend-Anwendungen.'],
      ['Unterstützt Seleos bei einer Shopmigration?', 'Ja. Wir planen Produkt-, Kunden- und Bestelldaten, Weiterleitungen, Schnittstellen, Testläufe und den kontrollierten Wechsel.'],
      ['Kann ein bestehender Shopify-Shop optimiert werden?', 'Ja. Wir prüfen Theme-Code, Liquid, Apps, Tracking, Bilder, Schnittstellen, Datenprozesse und Performance und setzen priorisierte Verbesserungen um.']
    ],
    related: [['Performance verbessern', 'performanceoptimierung-berlin.html'], ['Cloud-Integration planen', 'cloud-development.html'], ['Technologieentscheidung vorbereiten', 'technologieberatung-berlin.html']]
  },
  {
    file: 'performanceoptimierung-berlin.html',
    title: 'Performance-Optimierung Berlin | Seleos GmbH',
    description: 'Performance-Optimierung für Websites, Shops und Webanwendungen: Core Web Vitals, Datenbankoptimierung, Caching, Server und Cloud.',
    label: 'Web- & Application Performance',
    h1: 'Performance-Optimierung<br>Berlin',
    lead: 'Wir messen und optimieren Websites, Shops, APIs und Webanwendungen, wenn Ladezeiten, Datenbankabfragen, Serverlast oder Core Web Vitals zum Problem werden.',
    problem: 'Der tatsächliche Flaschenhals kann im Browser, im Anwendungscode, in SQL-Abfragen, Caching, Serverkonfiguration oder einer externen Integration liegen. Pauschale Checklisten verbessern deshalb oft nur Symptome.',
    outcome: 'Sie erhalten eine priorisierte Performance-Analyse mit messbarer Ausgangslage, konkreten Maßnahmen und einer dokumentierten Verifikation der erreichten Verbesserung.',
    image: 'assets/images/icon-performance.svg',
    imageAlt: 'Performance-Optimierung für Webanwendungen',
    scope: ['Performance-Audits für Websites, Shops, APIs und Webanwendungen', 'Core Web Vitals und reale Nutzerpfade', 'CSS, JavaScript, Bilder, Webfonts und Tracking', 'Serverantwort, PHP-/Java-Konfiguration und Hintergrundprozesse', 'SQL-Queries, Indizes, Schema und Locks', 'Browser-, Objekt- und Anwendungscaching', 'Varnish, Redis, CDN und HTTP-Komprimierung', 'Skalierung, Cloud-Betrieb und Monitoring'],
    deliverables: [
      ['Performance Audit', 'Messungen für Frontend, Backend, Datenbank und Infrastruktur mit identifizierten Engpässen.'],
      ['Priorisierte Roadmap', 'Quick Wins, technische Risiken und größere Maßnahmen mit erwarteter Wirkung und Umsetzungsaufwand.'],
      ['Optimierung & Verifikation', 'Umgesetzte Verbesserungen, erneute Messung und Dokumentation der tatsächlich erreichten Wirkung.']
    ],
    method: ['Reale Nutzerpfade und Betriebsbedingungen festlegen', 'Frontend, Backend, Datenbank und Infrastruktur messen', 'Engpässe und Ursachen sicher eingrenzen', 'Maßnahmen nach Wirkung, Aufwand und Risiko umsetzen', 'Erneut messen und Verbesserung nachvollziehbar dokumentieren'],
    faqs: [
      ['Muss eine langsame Anwendung neu entwickelt werden?', 'Nein. Häufig lassen sich bestehende Systeme durch gezielte Änderungen an Queries, Caching, Assets, Konfiguration oder einzelnen Architekturgrenzen deutlich verbessern.'],
      ['Werden Core Web Vitals geprüft?', 'Ja. Wir analysieren unter anderem Largest Contentful Paint, Interaction to Next Paint und Cumulative Layout Shift sowie die technischen Ursachen dahinter.'],
      ['Prüft Seleos auch Backend und Datenbanken?', 'Ja. Die Analyse umfasst Anwendungscode, Serverantwort, PHP oder Java, SQL-Queries, Indizes, Locks, Caching, Hintergrundprozesse und Infrastruktur.'],
      ['Wie wird der Erfolg nachgewiesen?', 'Wir messen vor und nach der Umsetzung unter vergleichbaren Bedingungen und dokumentieren, welche Maßnahmen welche technische Wirkung erreicht haben.']
    ],
    related: [['Websoftware weiterentwickeln', 'webentwicklung-berlin.html'], ['PHP-Anwendung optimieren', 'php-programmierung-berlin.html'], ['Cloud-Betrieb verbessern', 'cloud-development.html']]
  }
];

const pageDetails = {
  'ki-gestuetzte-softwareentwicklung.html': {
    fit: ['SaaS- und Softwarehersteller mit Entwicklungs- oder Modernisierungsbedarf', 'Unternehmen, die zusätzliche Engineering-Kapazität ohne großen Overhead benötigen', 'Teams, die Geschwindigkeit erhöhen und Qualität sowie Security kontrollierbar halten wollen'],
    basis: ['Klares Produktziel und ein gemeinsam abgegrenzter Entwicklungsumfang', 'Verbindliche Architekturregeln und messbare Abnahmekriterien', 'Automatisierte Prüfungen und menschliche Verantwortung für jede Freigabe']
  },
  'software-architektur-bewertung.html': {
    fit: ['Übernahme oder Weiterentwicklung extern erstellter Software', 'Wachstums-, Modernisierungs- oder Anbieterentscheidungen', 'Unklare technische Schulden, Qualität oder Betriebsrisiken'],
    basis: ['System- und Codezugriff entsprechend dem vereinbarten Scope', 'Interviews mit Technik, Produkt und Betrieb', 'Nachvollziehbare Evidenz statt rein subjektiver Architekturmeinung']
  },
  'security-review-software.html': {
    fit: ['Vor Releases, größeren Architekturänderungen oder Kundenprüfungen', 'Für Web-, API-, Cloud- und KI-nahe Softwarearchitekturen', 'Wenn Scanner-Ergebnisse um reale Angriffspfade ergänzt werden sollen'],
    basis: ['Threat Modeling, Security by Design und risikobasierte Codeprüfung', 'Orientierung unter anderem an OWASP ASVS und relevanten Angriffsklassen', 'Validierte Evidenz, klare Risikoeinordnung und umsetzbare Remediation']
  },
  'penetrationstest-webanwendungen-apis.html': {
    fit: ['Webanwendungen und APIs vor Release oder Kundenabnahme', 'Nach wesentlichen Änderungen an Rollen, Mandanten oder Geschäftslogik', 'Zur unabhängigen Verifikation behobener Schwachstellen'],
    basis: ['Schriftliche Autorisierung und verbindliche Rules of Engagement', 'Risikobasierte Tests nach OWASP WSTG, ASVS und API Security Top 10', 'Reproduzierbare Findings, sichere Evidenz und optionaler Retest']
  },
  'nis2-umsetzung.html': {
    fit: ['Unternehmen, die technische Pflichten praktisch operationalisieren müssen', 'Teams mit Gap-Listen, aber ohne durchgängigen Verbesserungsprozess', 'Organisationen mit verteilten System-, Lieferanten- und Incident-Risiken'],
    basis: ['Risikobasierte Priorisierung statt eines reinen Checklistenprojekts', 'Verknüpfung von Maßnahmen, Verantwortlichkeiten und Evidenzen', 'Klare Abgrenzung zu Rechtsberatung und formeller Prüfung']
  },
  'cyber-resilience-act.html': {
    fit: ['Hersteller und Anbieter von Softwareprodukten mit digitalen Elementen', 'Produktteams, die Secure Development und SBOM-Prozesse etablieren', 'Organisationen mit Handlungsbedarf bei Vulnerability Handling und Evidence'],
    basis: ['Produktbezogene Cybersecurity-Risikobewertung', 'Secure Development, Komponentenmanagement und koordinierte Schwachstellenbehandlung', 'Technische Dokumentation als gelebter Teil von Entwicklung und Support']
  },
  'continuous-security-compliance-management.html': {
    fit: ['Nach Assessments, Penetrationstests oder ersten Umsetzungsprojekten', 'Für kleine Teams ohne eigene laufende Security- und Evidence-Kapazität', 'Für Softwarehersteller mit dauerhaften NIS2-, CRA- oder Kundenanforderungen'],
    basis: ['Fester Review-Rhythmus und transparentes Maßnahmenregister', 'Messbare Aufgaben, Verantwortlichkeiten und technische Nachweise', 'Direkter Zugriff auf erfahrene Engineering-Kapazität ohne Projekt-Overhead']
  },
  'technologieberatung-berlin.html': {
    fit: ['Vor Neuentwicklung, Migration oder größerer Modernisierung', 'Bei Make-or-Buy-, Plattform- oder Anbieterentscheidungen', 'Wenn technische Risiken und Folgekosten transparent werden müssen'],
    basis: ['Anforderungen, Geschäftsziele und vorhandene Systeme', 'Bewertung von Architektur, Integration, Betrieb und Gesamtkosten', 'Umsetzbare Empfehlung statt herstellergebundener Produktberatung']
  },
  'cloud-development.html': {
    fit: ['Webanwendungen, APIs, Shops und interne Systeme', 'Vor Cloud-Migration oder Konsolidierung gewachsener Infrastruktur', 'Bei manuellen Deployments, fehlendem Monitoring oder unklaren Kosten'],
    basis: ['Last-, Daten-, Sicherheits- und Betriebsanforderungen', 'Bewertung von Cloud-, Hybrid- und schrittweisen Migrationsoptionen', 'Automatisierung, Observability und Wiederanlauf als Teil der Architektur']
  },
  'webentwicklung-berlin.html': {
    fit: ['Individuelle Prozesse, Rollen, Datenflüsse oder Integrationen', 'Kundenportale, Backoffice, interne Tools und API-Produkte', 'Weiterentwicklung oder Modernisierung vorhandener Websoftware'],
    basis: ['Priorisierte Nutzer- und Geschäftsanforderungen', 'Gemeinsame Betrachtung von Frontend, Backend, Daten und Betrieb', 'Iterative Umsetzung mit klarer Architektur und automatisierten Prüfungen']
  },
  'php-programmierung-berlin.html': {
    fit: ['Bestehende geschäftskritische PHP-Anwendungen', 'Modernisierung von Symfony-, Laravel-, Zend- oder Individualsoftware', 'Neue APIs, Integrationen, Backoffice- und Webfunktionen'],
    basis: ['Analyse von Code, Frameworks, Datenbank und Betriebsrisiken', 'Schrittweise Modernisierung statt unnötigem Big-Bang-Rewrite', 'Tests, Security und Wartbarkeit als verbindliche Leitplanken']
  },
  'shopify-development.html': {
    fit: ['Shops mit individuellen Prozessen oder wachsenden Integrationen', 'ERP-, PIM-, Logistik-, Payment- oder Backend-Anbindung', 'Relaunch, Migration oder Performance-Probleme bestehender Shops'],
    basis: ['Shopify-Standardfunktionen zuerst sinnvoll ausschöpfen', 'Klare Datenverantwortung und robuste API- beziehungsweise Webhook-Flows', 'Wartbares Theme, kontrollierter App-Einsatz und messbare Performance']
  },
  'performanceoptimierung-berlin.html': {
    fit: ['Langsame Websites, Shops, APIs und individuelle Webanwendungen', 'Probleme mit Core Web Vitals, Serverlast oder Datenbankantworten', 'Systeme mit steigenden Datenmengen, Nutzern oder Infrastrukturkosten'],
    basis: ['Messung unter reproduzierbaren und realistischen Bedingungen', 'Getrennte Analyse von Frontend, Backend, Datenbank und Infrastruktur', 'Erneute Messung als Nachweis statt subjektivem Geschwindigkeitseindruck']
  }
};

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const renderTimeline = (page) => {
  const timeline = page.timeline;
  if (!timeline) return '';
  const items = timeline.items.map((item) => {
    const marker = item.date
      ? `<time datetime="${item.date}">${escapeHtml(item.dateLabel)}</time>`
      : `<span>${escapeHtml(item.state)}</span>`;
    const badge = item.date ? `<span class="timeline-state">${escapeHtml(item.state)}</span>` : '';
    const countdown = item.countdown ? `<span class="timeline-countdown" data-deadline="${item.date}" hidden></span>` : '';
    return `<li class="timeline-item${item.highlight ? ' timeline-item-highlight' : ''}">
                <p class="timeline-marker">${marker}${badge}${countdown}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <p class="mb-0">${escapeHtml(item.text)}</p>
            </li>`;
  }).join('');
  return `<section id="fristen"><div class="container my-4 my-lg-5">
        <p class="section-label"><span></span> ${escapeHtml(timeline.label)}</p><h2 class="section-title">${escapeHtml(timeline.heading)}</h2>
        <p class="mt-4 mw-copy fs-5 lh-lg">${escapeHtml(timeline.intro)}</p>
        <ol class="timeline mt-5">${items}</ol>
    </div></section>
    `;
};

const renderPage = (page) => {
  const url = `https://www.seleos.de/${page.file}`;
  const details = pageDetails[page.file];
  const faqEntities = page.faqs.map(([question, answer]) => ({
    '@type': 'Question', name: question, acceptedAnswer: {'@type': 'Answer', text: answer}
  }));
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {'@type': 'Organization', '@id': 'https://www.seleos.de/#organization', name: 'Seleos GmbH', url: 'https://www.seleos.de/'},
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description,
        inLanguage: 'de-DE', dateModified: reviewDate,
        // Nur bei fachlich geprüften regulatorischen Inhalten ausweisen.
        ...(page.timeline ? {
          lastReviewed: reviewDate,
          reviewedBy: {'@id': 'https://www.seleos.de/#organization'},
          citation: page.timeline.sources.map(([, href]) => href)
        } : {}),
        about: {'@id': `${url}#service`}, isPartOf: {'@id': 'https://www.seleos.de/#website'}
      },
      {'@type': 'Service', '@id': `${url}#service`, url, name: page.label, serviceType: page.label, description: page.lead, provider: {'@id': 'https://www.seleos.de/#organization'}, areaServed: ['DE', 'AT', 'CH']},
      {'@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
        {'@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.seleos.de/'},
        {'@type': 'ListItem', position: 2, name: page.label, item: url}
      ]},
      {'@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faqEntities}
    ]
  };
  return `<!DOCTYPE html>
<html lang="de">
<head>
    <title>${escapeHtml(page.title)}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow">
    <meta property="og:locale" content="de_DE">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="https://www.seleos.de/assets/images/seleos_fb.jpg">
    <meta property="og:image:alt" content="Seleos GmbH – ${escapeHtml(page.label)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="https://www.seleos.de/assets/images/seleos_fb.jpg">
    <link rel="canonical" href="${url}">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="assets/styles/custom.css?v=20260802" media="screen">
    <link rel="apple-touch-icon" sizes="57x57" href="assets/images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="assets/images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/images/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="256x256" href="assets/images/icons/favicon-256x256.png">
    <link rel="manifest" href="manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/images/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body id="top">
<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-white" aria-label="Hauptnavigation">
    <div class="container">
        <a href="/" aria-label="Seleos Startseite"><img src="assets/images/logo.svg" width="120" height="30" alt="Seleos GmbH" class="navbar-brand m-0 p-0"></a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Navigation öffnen"><span class="navbar-toggler-lines" aria-hidden="true"><span></span><span></span><span></span></span></button>
        <div id="navbar-collapse" class="collapse navbar-collapse">
            <div class="navbar-nav navbar-nav-scroll">
                <a class="nav-link d-flex align-self-center" href="/#top">Home</a>
                <a class="nav-link d-flex align-self-center" href="/#services">Leistungen</a>
                <a class="nav-link d-flex align-self-center" href="/#approach">Vorgehen</a>
                <a class="nav-link d-flex align-self-center" href="/#team">Team</a>
                <a class="nav-link d-flex align-self-center" href="#contact">Kontakt</a>
            </div>
            <div class="d-lg-none d-flex flex-column flex-md-row w-100 p-4">
                <a class="btn btn-primary btn-lg btn-phone w-100 me-0 me-md-2 mb-2 mb-md-0" href="tel:+493025785767">Anrufen</a>
                <a class="btn btn-primary btn-lg btn-mail w-100 ms-0 ms-md-2" href="mailto:info@seleos.de">E-Mail schreiben</a>
            </div>
        </div>
    </div>
</nav>
<main>
    <section id="header" class="bg-dark-blue-r">
        <div class="container my-0 py-5"><div class="row"><div class="col-lg-6 my-lg-5">
            <p class="hero-kicker text-white mb-4"><span></span>${escapeHtml(page.label)}</p>
            <h1 class="text-white text-padded"><span>${page.h1}</span></h1>
            <p class="mt-4 mb-0 fs-5 lh-lg text-white">${escapeHtml(page.lead)}</p>
            <a href="#contact" class="mt-5 rounded-0 btn btn-lg btn-outline-light fs-6 text-uppercase">Vorhaben einordnen</a>
        </div></div></div>
    </section>
    <section><div class="container my-4 my-lg-5"><div class="row align-items-center">
        <div class="col-lg-8"><p class="fs-5 lh-lg">${escapeHtml(page.problem)}</p><p class="mb-0 fs-5 lh-lg"><strong>Ihr Ergebnis:</strong> ${escapeHtml(page.outcome)}</p></div>
        <div class="col-lg-4 mt-5 mt-lg-0 text-center"><div class="img-circle"><img src="${page.image}" width="150" height="150" alt="${escapeHtml(page.imageAlt)}"></div></div>
    </div></div></section>
    ${renderTimeline(page)}
    <section><div class="container mb-5 mw-100 bg-list-phone"><div class="container"><div class="row"><div class="col-12 col-lg-10 offset-lg-1 py-4 p-lg-5 bg-list">
        <p class="section-label"><span></span> Leistungsumfang</p><h2 class="section-title">Was wir analysieren und umsetzen</h2>
        <ul class="list-bullet service-scope mt-4 mb-0">${page.scope.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div></div></div></div></section>
    <section><div class="container my-4 my-lg-5">
        <p class="section-label"><span></span> Orientierung</p><h2 class="section-title">Für wen die Leistung geeignet ist</h2>
        <div class="row mt-4"><div class="col-lg-6 mb-4 mb-lg-0"><div class="card h-100 rounded-0"><div class="card-body px-4 py-5"><h3>Typische Ausgangslagen</h3><ul class="list-bullet orientation-list mb-0">${details.fit.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div></div></div><div class="col-lg-6"><div class="card h-100 rounded-0"><div class="card-body px-4 py-5"><h3>Arbeitsgrundlage</h3><ul class="list-bullet orientation-list mb-0">${details.basis.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div></div></div></div>
    </div></section>
    <section><div class="container mb-5 mw-100 bg-list-phone"><div class="container my-5">
        <p class="section-label"><span></span> Kaufbare Ergebnisse</p><h2 class="section-title">Ein klarer Einstieg mit verwertbaren Deliverables</h2>
        <div class="row mt-4">${page.deliverables.map(([title, text]) => `<div class="col-lg-4 mb-4"><div class="card h-100 rounded-0"><div class="card-body px-4 py-5"><h3>${escapeHtml(title)}</h3><p class="mb-0">${escapeHtml(text)}</p></div></div></div>`).join('')}</div>
    </div></div></section>
    <section><div class="container mb-5 mw-100 bg-dark-blue-r text-white"><div class="row gx-0"><div class="col-12"><div class="container py-5">
        <p class="section-label text-white"><span></span> Vorgehen</p><h2 class="section-title text-white">Strukturiert vom Scope bis zum Nachweis</h2>
        <div class="row process-row mt-4">${page.method.map((item, index) => `<div class="col-md process-step process-step-light"><span class="process-number">0${index + 1}</span><p class="mb-0">${escapeHtml(item)}</p></div>`).join('')}</div>
    </div></div></div></div></section>
    <section id="faq"><div class="container mb-5 mw-100 bg-list-phone"><div class="row gx-0"><div class="col-12"><div class="container py-5"><div class="row"><div class="col-12">
        <p class="section-label"><span></span> Häufige Fragen</p><h2 class="section-title mb-5">Wichtige Fragen vor dem Projektstart</h2>
        <div class="accordion accordion-flush" id="faq-accordion">${page.faqs.map(([question, answer], index) => `<div class="accordion-item"><h3 class="accordion-header" id="faq-heading-${index}"><button class="accordion-button${index ? ' collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${index}" aria-expanded="${index ? 'false' : 'true'}" aria-controls="faq-${index}">${escapeHtml(question)}</button></h3><div id="faq-${index}" class="accordion-collapse collapse${index ? '' : ' show'}" aria-labelledby="faq-heading-${index}" data-bs-parent="#faq-accordion"><div class="accordion-body">${escapeHtml(answer)}</div></div></div>`).join('')}</div>
    </div></div></div></div></div></div></section>
    <section><div class="container my-4 my-lg-5"><p class="section-label"><span></span> Verwandte Leistungen</p><h2 class="section-title">Technische Themen im Zusammenhang</h2><div class="row legacy-links mt-3">${page.related.map(([label, href]) => `<div class="col-md-4 mb-3"><a href="${href}">${escapeHtml(label)}</a></div>`).join('')}</div></div></section>
    <section id="contact"><div class="container mw-100 bg-dark-blue-r text-white"><div class="row gx-0"><div class="col-12"><div class="container mb-5"><div class="row">
        <div class="col-lg-7 mt-5"><h2 class="section-title mb-4 text-white mw-400">Vorhaben oder Risiko gemeinsam einordnen</h2><p class="mb-5">Beschreiben Sie uns kurz Ihre Ausgangslage. Sie sprechen direkt mit den Entwicklern und erhalten eine offene Einschätzung zum nächsten sinnvollen Schritt.</p>
        <div class="d-flex flex-column flex-md-row mb-3"><a class="btn btn-lg btn-primary btn-phone w-100 mb-2 mb-md-0 me-md-2" href="tel:+493025785767">Anrufen</a><a class="btn btn-lg btn-primary btn-mail w-100 ms-0 ms-md-2" href="mailto:info@seleos.de">E-Mail schreiben</a></div></div>
        <div class="col-lg-5 d-flex mt-5 justify-content-lg-center text-white"><div class="mt-lg-4"><p class="section-label mb-4 text-white"><span></span>Kontakt</p><p class="mb-4">Seleos GmbH<br>Schwarzmeerstraße 42<br>10319 Berlin</p><p>T&nbsp;&nbsp;<a class="text-white" href="tel:+493025785767">+49 (0)30 / 2578 5767</a><br><a class="text-white" href="mailto:info@seleos.de">info@seleos.de</a></p></div></div>
    </div></div></div></div></div></section>
</main>
<footer><div class="container"><div class="row py-3">
    <div class="col-12 order-lg-1 col-lg-4 d-flex align-items-center justify-content-center"><div class="w-100 pb-3 pb-lg-0 text-center dashed-end"><a href="https://linkedin.com/company/seleos-gmbh" target="_blank" rel="noopener noreferrer" class="px-2"><img src="assets/images/icon-linkedin.svg" width="30" height="30" alt="LinkedIn"></a><a href="https://www.xing.com/pages/seleosgmbh" target="_blank" rel="noopener noreferrer" class="px-2"><img src="assets/images/icon-xing.svg" width="30" height="30" alt="Xing"></a><a href="https://www.facebook.com/Seleos/" target="_blank" rel="noopener noreferrer" class="px-2"><img src="assets/images/icon-facebook.svg" width="30" height="30" alt="Facebook"></a><a href="https://twitter.com/seleos" target="_blank" rel="noopener noreferrer" class="px-2"><img src="assets/images/icon-x.svg" width="30" height="30" alt="X"></a></div></div>
    <div class="col-6 order-lg-0 col-lg-4 d-flex mt-3 mt-lg-0 align-items-end align-items-lg-center"><p class="my-0 text-uppercase">&copy; Seleos GmbH</p></div>
    <div class="col-6 order-lg-2 col-lg-4 d-flex mt-3 mt-lg-0 align-items-end align-items-lg-center justify-content-end"><p class="my-0 text-uppercase text-end"><a href="agb.html" class="d-block">AGB</a><a href="datenschutz.html" class="d-block d-lg-inline">Datenschutz</a><span class="d-none d-lg-inline"> / </span><a href="impressum.html">Impressum</a></p></div>
</div></div></footer>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script><script src="assets/scripts/custom.js?v=20260802"></script>
<script type="application/ld+json">${JSON.stringify(structuredData, null, 2).replaceAll('<', '\\u003c')}</script>
</body></html>`;
};

const generatedPageFiles = new Set([
  'ki-gestuetzte-softwareentwicklung.html',
  'software-architektur-bewertung.html',
  'security-review-software.html',
  'penetrationstest-webanwendungen-apis.html',
  'nis2-umsetzung.html',
  'cyber-resilience-act.html',
  'continuous-security-compliance-management.html'
]);

for (const page of pages.filter(({file}) => generatedPageFiles.has(file))) {
  writeFileSync(resolve(root, page.file), renderPage(page));
}

console.log(`Generated ${generatedPageFiles.size} service pages.`);
