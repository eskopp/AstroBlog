---
title: "Math, chemistry and physics"
description: "Test post for formula typesetting with KaTeX — rendered at build time, no client JS."
pubDate: 2026-08-31
tags: ["code"]
ai: true
---

Every formula is rendered at build time. The delivered HTML contains finished
KaTeX markup, no JavaScript.

## Math

Inline: the mass–energy relation $E = mc^2$. As a block, the Gaussian integral:

$$\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$$

And a sum:

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$

## Physics

The time-dependent Schrödinger equation in standard notation:

$$i\hbar\,\frac{\partial}{\partial t}\lvert\psi\rangle = \hat{H}\lvert\psi\rangle$$

Maxwell, differential form:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

## Chemistry

Via the `mhchem` extension with `\ce{}`:

$$\ce{CH4 + 2 O2 -> CO2 + 2 H2O}$$

$$\ce{2 H2 + O2 <=> 2 H2O}$$
