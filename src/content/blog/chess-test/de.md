---
title: "Schachstellungen"
description: "Testbeitrag für FEN-Diagramme – zur Build-Zeit als SVG gerendert, ohne Client-JS."
pubDate: 2026-09-05
tags: ["code"]
series:
  - { name: feature-tour, order: 6 }
urlSlug: "schachstellungen"
ai: true
---

Ein `fen`-Codeblock mit einer FEN-Zeichenkette wird beim Bauen zu einem
SVG-Schachbrett gerendert. Kein JavaScript, keine externe Bibliothek im Browser.
Unten steht immer die Seite, die am Zug ist – der kleine Kreis daneben zeigt es
zusätzlich an, und der Button öffnet dieselbe Stellung im Lichess-Analyse-Tool.
Ein optionaler "Engine laden"-Button unter jedem Brett startet Stockfish bei
Bedarf direkt im Browser, ein "Engine ausblenden"-Button räumt sie wieder weg.

## Grundstellung

Weiß ist am Zug, also unten:

```fen
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## Nach 1.e4 – Schwarz ist am Zug

Jetzt dreht sich das Brett automatisch, Schwarz sitzt unten:

```fen
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
```

## Eine bekannte Mattstellung

Das "Schäfermatt", Weiß am Zug:

```fen
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Manuell gedreht

`white` oder `black` nach der Sprache erzwingt eine feste Ausrichtung,
unabhängig davon, wer am Zug ist – hier dieselbe Stellung aus Schwarz-Sicht:

```fen black
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Ohne Engine

`noengine` nach der Sprache rendert ein rein statisches Brett, auch wenn die
Engine für die ganze Seite aktiv ist: keine Bewertungsleiste, keine
Analysepfeile, kein "Engine laden"-Button, keine Zugliste. Der Lichess-Link
bleibt. Lässt sich mit `white` oder `black` für eine feste Ausrichtung
kombinieren.

```fen noengine
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 4 4
```
