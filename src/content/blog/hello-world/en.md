---
title: "Hello world"
description: "How this blog is put together — theme, deployment and what's inside."
pubDate: 2026-08-30
tags: ["meta"]
ai: true
---

First post. Instead of an empty "hello world" I'm using it to show briefly how
the site is built.

## The theme

The blog runs on [AstroBlogTheme](https://github.com/eskopp/AstroBlogTheme),
pulled in straight from GitHub as a package — much like a Hugo module. That keeps
the blog repo tiny: a config, a content collection and the posts.

### Content

Every post is a Markdown file. One folder per post, one file per language
(`de.md`, `en.md`). The folder name links the translations automatically.

## Deployment

There is no server that builds Astro. Instead:

### From GitHub to the server

A GitHub Actions workflow builds the static site on every push to `main` and
pushes the output to a `dist` branch. The web server only clones that branch and
serves the files directly through nginx — no Node, no build step on the box.

### GitLab mirror

In parallel the same workflow mirrors everything to a self-hosted GitLab
instance as a second copy.

## What's already there

- Light and dark mode
- Full-text search in the browser, no server
- Hugo-style tags under `/tags/`
- Bilingual (German and English) via per-language slugs
- RSS and JSON feeds
- Reading time, table of contents and heading anchors
- Custom error pages
- No cookies, no tracking, no external scripts

## What's next

Pagination, an archive by year and an automatic pull on the server are still to
come. More on that in later posts.
