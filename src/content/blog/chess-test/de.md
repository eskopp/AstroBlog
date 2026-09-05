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
Unten steht immer die Seite, die am Zug ist – der kleine Kreis daneben zeigt es
zusätzlich an, und der Button öffnet dieselbe Stellung im Lichess-Analyse-Tool.
Ein optionaler "Engine laden"-Button unter jedem Brett startet Stockfish bei
Bedarf direkt im Browser.

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
