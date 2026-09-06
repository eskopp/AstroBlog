---
title: "Chess positions"
description: "Test post for FEN diagrams — rendered as SVG at build time, no client-side JS."
pubDate: 2026-09-05
tags: ["code"]
ai: true
---

A `fen` code block containing a FEN string is rendered into an SVG chessboard
at build time. No JavaScript, no external library in the browser. The side to
move always sits at the bottom — the small circle next to it shows the same
thing, and the button opens the position in Lichess's analysis tool. An
optional "Load engine" button below each board runs Stockfish in your browser
on demand.

## Starting position

White to move, so at the bottom:

```fen
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

## After 1.e4 — Black to move

The board flips automatically, Black now sits at the bottom:

```fen
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
```

## A famous checkmate

The "Scholar's mate", White to move:

```fen
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Pinned manually

`white` or `black` after the language tag forces a fixed orientation,
regardless of whose move it is — here the same position from Black's side:

```fen black
rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3
```

## Without the engine

Add `noengine` after the language tag to render a plain static board even
when the engine is enabled site-wide: no evaluation bar, no analysis arrows,
no "Load engine" button, no move list. It still opens in Lichess. Combine it
with `white` or `black` if you also want a fixed orientation.

```fen noengine
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 4 4
```
