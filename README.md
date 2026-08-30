# AstroBlog

Personal blog, built with [Astro](https://astro.build) on top of
[AstroBlogTheme](https://github.com/eskopp/AstroBlogTheme) (pulled in from GitHub
as a package).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

## Writing

Add `.md` / `.mdx` files to `src/content/blog/`. Frontmatter:

```yaml
---
title: "Post title"
description: "One line for previews and meta tags"
pubDate: 2026-08-30
# updatedDate: 2026-09-01
# tags: ["notes"]
# draft: true
---
```

The `/blog`, `/blog/<slug>`, `/rss.xml` and `/404` routes come from the theme.
`/` and `/about` live in `src/pages/`.

## Configuration

Theme options (title, nav, social, …) are set in `astro.config.mjs`. The
canonical domain is `site:` in the same file — currently a placeholder
(`https://example.com`), update it once the domain is decided.

## Mirrored to GitLab

Every push to `main`, tag and release is mirrored to
`gitlab.erik-skopp.de/Themes/AstroBlog` by `.github/workflows/mirror-to-gitlab.yml`.
