---
title: "Hallo Welt"
description: "Wie dieser Blog aufgebaut ist – Theme, Deployment und was drinsteckt."
pubDate: 2026-08-30
tags: ["meta"]
urlSlug: "hallo-welt"
ai: true
---

Erster Beitrag. Statt eines leeren „Hallo Welt" nutze ich ihn, um kurz zu
zeigen, wie die Seite gebaut ist.

## Das Theme

Der Blog läuft auf [AstroBlogTheme](https://github.com/eskopp/AstroBlogTheme),
das direkt von GitHub als Paket eingebunden wird – ähnlich wie ein Hugo-Modul.
Das eigentliche Blog-Repo bleibt dadurch winzig: eine Konfiguration, eine
Content-Collection und die Beiträge.

### Inhalte

Jeder Beitrag ist eine Markdown-Datei. Ein Ordner pro Beitrag, darin eine Datei
pro Sprache (`de.md`, `en.md`). Der Ordnername verknüpft die Übersetzungen
automatisch.

## Deployment

Es gibt keinen Server, der Astro baut. Stattdessen:

### Von GitHub auf den Server

Ein GitHub-Actions-Workflow baut bei jedem Push auf `main` die statische Seite
und schiebt den Output in einen `dist`-Branch. Der Webserver klont nur diesen
Branch und liefert die Dateien direkt über nginx aus – kein Node, kein
Build-Schritt auf der Kiste.

### GitLab-Spiegel

Parallel spiegelt derselbe Workflow alles auf eine selbstgehostete
GitLab-Instanz, als zweite Kopie.

## Was schon drin ist

- Heller und dunkler Modus
- Volltextsuche im Browser, ohne Server
- Tags im Hugo-Stil unter `/tags/`
- Zweisprachig (Deutsch und Englisch) über eigene Slugs
- RSS- und JSON-Feed
- Lesezeit, Inhaltsverzeichnis und Anker an den Überschriften
- Eigene Fehlerseiten
- Keine Cookies, kein Tracking, keine externen Skripte

## Was noch kommt

Pagination, ein Archiv nach Jahr und ein automatischer Pull auf dem Server
stehen noch aus. Mehr dazu in späteren Beiträgen.
