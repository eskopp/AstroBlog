---
title: "Diagramme mit Mermaid"
description: "Testbeitrag für Mermaid-Diagramme, hell und dunkel."
pubDate: 2026-08-31
tags: ["code"]
urlSlug: "diagramme"
ai: true
---

Mermaid-Diagramme werden im Browser gerendert – aus einem selbst gehosteten
Bundle, nur auf Seiten mit einem Diagramm, und sie folgen dem Hell-/Dunkel-Umschalter.

## Der Deploy-Weg

```mermaid
flowchart LR
    A[Push to main] --> B{GitHub Actions}
    B -->|astro build| C[dist branch]
    C --> D[Server git pull]
    D --> E[nginx serves static]
```

## Ein Request

```mermaid
sequenceDiagram
    participant Browser
    participant nginx
    Browser->>nginx: GET /blog/diagramme/
    nginx-->>Browser: statisches HTML
    Browser->>nginx: GET /_astro/mermaid.core.js
    nginx-->>Browser: Diagramm-Bundle
```
