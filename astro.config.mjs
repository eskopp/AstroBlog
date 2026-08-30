import { defineConfig } from "astro/config";
import blogTheme from "astro-blog-theme";

// TODO: set this to the real domain once it is decided.
export default defineConfig({
  site: "https://example.com",
  integrations: [
    blogTheme({
      title: "Erik Skopp",
      description: "Notes on infrastructure, self-hosting and the occasional rocket launch.",
      author: "Erik Skopp",
      nav: [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
      ],
      social: [
        { href: "https://github.com/eskopp", label: "GitHub" },
        { href: "/rss.xml", label: "RSS" },
      ],
    }),
  ],
});
