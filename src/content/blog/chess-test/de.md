---
title: "Schachstellungen"
description: "Testbeitrag für FEN-Diagramme – zur Build-Zeit als SVG gerendert, ohne Client-JS."
pubDate: 2026-09-05
tags: ["code"]
urlSlug: "schachstellungen"
ai: true
---

Ein `fen`-Codeblock mit einer FEN-Zeichenkette wird beim Bauen zu einem
SVG-Schachbrett gerendert. Kein JavaScript, keine externe Bibliothek im Browser.

## Grundstellung

```fen
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## Eine bekannte Mattstellung

Das "Schäfermatt":

```fen
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Gedreht (aus Schwarz-Sicht)

Dieselbe Stellung, `black` nach der Sprache angehängt dreht das Brett:

```fen black
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```
