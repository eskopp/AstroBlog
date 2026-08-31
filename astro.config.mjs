import { defineConfig } from "astro/config";
import blogTheme from "astro-blog-theme";

export default defineConfig({
  site: "https://erik-skopp.de",
  integrations: [
    blogTheme({
      title: "Erik Skopp",
      description: "Notes on infrastructure, self-hosting and the occasional rocket launch.",
      author: "Erik Skopp",
      locales: ["de", "en"],
      errorLocale: "en",
      mermaid: true,
      math: true,
      colorScheme: "light",
      nav: [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/tags", label: "Tags" },
        { href: "/about", label: "About" },
      ],
      social: [
        { href: "https://github.com/eskopp", label: "GitHub" },
        { href: "/rss.xml", label: "RSS (DE)" },
        { href: "/rss/en.xml", label: "RSS (EN)" },
      ],
      legal: [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ],
      license: {
        label: "CC BY-ND 4.0",
        href: "https://creativecommons.org/licenses/by-nd/4.0/deed.en",
      },
    }),
  ],
});
