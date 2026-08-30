---
title: "Mathe, Chemie und Physik"
description: "Testbeitrag für Formelsatz mit KaTeX – zur Build-Zeit gerendert, ohne Client-JS."
pubDate: 2026-08-31
tags: ["code"]
urlSlug: "formeln"
ai: true
---

Alle Formeln werden beim Bauen gerendert. Im ausgelieferten HTML steckt fertiges
KaTeX-Markup, kein JavaScript.

## Mathe

Inline: die Masse-Energie-Beziehung $E = mc^2$. Als Block das Gauß-Integral:

$$\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$$

Und eine Summe:

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$

## Physik

Die zeitabhängige Schrödinger-Gleichung in Standardnotation:

$$i\hbar\,\frac{\partial}{\partial t}\lvert\psi\rangle = \hat{H}\lvert\psi\rangle$$

Maxwell, differentiell:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

## Chemie

Über die `mhchem`-Erweiterung mit `\ce{}`:

$$\ce{CH4 + 2 O2 -> CO2 + 2 H2O}$$

$$\ce{2 H2 + O2 <=> 2 H2O}$$
