---
title: "Chess positions"
description: "Test post for FEN diagrams — rendered as SVG at build time, no client-side JS."
pubDate: 2026-09-05
tags: ["code"]
ai: true
---

A `fen` code block containing a FEN string is rendered into an SVG chessboard
at build time. No JavaScript, no external library in the browser.

## Starting position

```fen
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## A famous checkmate

The "Scholar's mate":

```fen
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Flipped (black's point of view)

The same position, with `black` appended after the language tag:

```fen black
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```
