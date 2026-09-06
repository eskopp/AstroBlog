/*
 * astro-blog-theme service worker.
 *
 * The build id and precache list a few lines down are filled in at build time.
 *
 * Strategy:
 *   - precache every page and hashed asset on install (big files like the
 *     Stockfish WASM and feeds are left out — they cache on first use only)
 *   - navigations: network-first, fall back to the cached page, then "/"
 *   - other same-origin GETs: cache-first, then network (and cache the result)
 */

const BUILD_ID = "mtqbhrzv";
const CACHE = `abt-${BUILD_ID}`;
const PRECACHE = JSON.parse("[\"/\",\"/.well-known/security.txt\",\"/403/\",\"/404.html\",\"/429/\",\"/500.html\",\"/503/\",\"/_astro/403.M7Fhrl-s.css\",\"/_astro/ChessEngineRuntime.astro_astro_type_script_index_0_lang.BJ8RnVhg.js\",\"/_astro/KaTeX_AMS-Regular.BQhdFMY1.woff2\",\"/_astro/KaTeX_AMS-Regular.DMm9YOAa.woff\",\"/_astro/KaTeX_AMS-Regular.DRggAlZN.ttf\",\"/_astro/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf\",\"/_astro/KaTeX_Caligraphic-Bold.BEiXGLvX.woff\",\"/_astro/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2\",\"/_astro/KaTeX_Caligraphic-Regular.CTRA-rTL.woff\",\"/_astro/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2\",\"/_astro/KaTeX_Caligraphic-Regular.wX97UBjC.ttf\",\"/_astro/KaTeX_Fraktur-Bold.BdnERNNW.ttf\",\"/_astro/KaTeX_Fraktur-Bold.BsDP51OF.woff\",\"/_astro/KaTeX_Fraktur-Bold.CL6g_b3V.woff2\",\"/_astro/KaTeX_Fraktur-Regular.CB_wures.ttf\",\"/_astro/KaTeX_Fraktur-Regular.CTYiF6lA.woff2\",\"/_astro/KaTeX_Fraktur-Regular.Dxdc4cR9.woff\",\"/_astro/KaTeX_Main-Bold.Cx986IdX.woff2\",\"/_astro/KaTeX_Main-Bold.Jm3AIy58.woff\",\"/_astro/KaTeX_Main-Bold.waoOVXN0.ttf\",\"/_astro/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2\",\"/_astro/KaTeX_Main-BoldItalic.DzxPMmG6.ttf\",\"/_astro/KaTeX_Main-BoldItalic.SpSLRI95.woff\",\"/_astro/KaTeX_Main-Italic.3WenGoN9.ttf\",\"/_astro/KaTeX_Main-Italic.BMLOBm91.woff\",\"/_astro/KaTeX_Main-Italic.NWA7e6Wa.woff2\",\"/_astro/KaTeX_Main-Regular.B22Nviop.woff2\",\"/_astro/KaTeX_Main-Regular.Dr94JaBh.woff\",\"/_astro/KaTeX_Main-Regular.ypZvNtVU.ttf\",\"/_astro/KaTeX_Math-BoldItalic.B3XSjfu4.ttf\",\"/_astro/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2\",\"/_astro/KaTeX_Math-BoldItalic.iY-2wyZ7.woff\",\"/_astro/KaTeX_Math-Italic.DA0__PXp.woff\",\"/_astro/KaTeX_Math-Italic.flOr_0UB.ttf\",\"/_astro/KaTeX_Math-Italic.t53AETM-.woff2\",\"/_astro/KaTeX_SansSerif-Bold.CFMepnvq.ttf\",\"/_astro/KaTeX_SansSerif-Bold.D1sUS0GD.woff2\",\"/_astro/KaTeX_SansSerif-Bold.DbIhKOiC.woff\",\"/_astro/KaTeX_SansSerif-Italic.C3H0VqGB.woff2\",\"/_astro/KaTeX_SansSerif-Italic.DN2j7dab.woff\",\"/_astro/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf\",\"/_astro/KaTeX_SansSerif-Regular.BNo7hRIc.ttf\",\"/_astro/KaTeX_SansSerif-Regular.CS6fqUqJ.woff\",\"/_astro/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2\",\"/_astro/KaTeX_Script-Regular.C5JkGWo-.ttf\",\"/_astro/KaTeX_Script-Regular.D3wIWfF6.woff2\",\"/_astro/KaTeX_Script-Regular.D5yQViql.woff\",\"/_astro/KaTeX_Size1-Regular.C195tn64.woff\",\"/_astro/KaTeX_Size1-Regular.Dbsnue_I.ttf\",\"/_astro/KaTeX_Size1-Regular.mCD8mA8B.woff2\",\"/_astro/KaTeX_Size2-Regular.B7gKUWhC.ttf\",\"/_astro/KaTeX_Size2-Regular.Dy4dx90m.woff2\",\"/_astro/KaTeX_Size2-Regular.oD1tc_U0.woff\",\"/_astro/KaTeX_Size3-Regular.CTq5MqoE.woff\",\"/_astro/KaTeX_Size3-Regular.DgpXs0kz.ttf\",\"/_astro/KaTeX_Size4-Regular.BF-4gkZK.woff\",\"/_astro/KaTeX_Size4-Regular.DWFBv043.ttf\",\"/_astro/KaTeX_Size4-Regular.Dl5lxZxV.woff2\",\"/_astro/KaTeX_Typewriter-Regular.C0xS9mPB.woff\",\"/_astro/KaTeX_Typewriter-Regular.CO6r4hn1.woff2\",\"/_astro/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf\",\"/_astro/MermaidRuntime.astro_astro_type_script_index_0_lang.9o7LlJ3O.js\",\"/_astro/abnfDiagram-VCTEODGH.CQw11_RL.js\",\"/_astro/arc.LlkjAjMV.js\",\"/_astro/architectureDiagram-5GKGNRK7.CfRZwDah.js\",\"/_astro/blockDiagram-I7D4REHJ.kxiepDHZ.js\",\"/_astro/c4Diagram-7LVT6UL2.CEcGO4w1.js\",\"/_astro/channel.BUvCDyVG.js\",\"/_astro/chess.mk4zK8oo.js\",\"/_astro/chunk-2Q5K7J3B.DuAh6TIg.js\",\"/_astro/chunk-5VM5RSS4.C1k0-9WM.js\",\"/_astro/chunk-F27PBJKO.CCn5dlU-.js\",\"/_astro/chunk-IMKFNOWR.4NiMySyM.js\",\"/_astro/chunk-JWPE2WC7.8ZGucpc4.js\",\"/_astro/chunk-POPQ4Y6H.DQT4zSyR.js\",\"/_astro/chunk-SVP7TREG.BYkghtAH.js\",\"/_astro/chunk-TICWLB2K.B0U6L-hf.js\",\"/_astro/chunk-XXDRQBXY.D9DYAgj6.js\",\"/_astro/classDiagram-ZZMXUADV.NlqZTlaT.js\",\"/_astro/classDiagram-v2-VYDZK3BY.NlqZTlaT.js\",\"/_astro/cose-bilkent-JH36ORCC.Bi_u4aEx.js\",\"/_astro/cynefinDiagram-5FMLGOSQ.trZicT5h.js\",\"/_astro/cytoscape.esm.lAmQKSWr.js\",\"/_astro/dagre-GXQ25YYZ.C2NSkNjo.js\",\"/_astro/defaultLocale.DX6XiGOO.js\",\"/_astro/diagram-S7CK7UJ4.sacZ1bX8.js\",\"/_astro/diagram-UQ7AKVKN.NkRQJwww.js\",\"/_astro/diagram-VSXAHHWV.MQOIt4RD.js\",\"/_astro/diagram-VX7I27RA.DGlrH7lg.js\",\"/_astro/diagram-Z3DM3KII.C025d-El.js\",\"/_astro/ebnfDiagram-PWID7BFC.Bd-meUyi.js\",\"/_astro/erDiagram-RLTQ6QDP.DJaZqlWR.js\",\"/_astro/flowDiagram-HODETNUW.CwF__GSs.js\",\"/_astro/ganttDiagram-EL5Y4UJY.DFb0v3ac.js\",\"/_astro/gitGraphDiagram-WWUBYQGX.CUE0oXeO.js\",\"/_astro/infoDiagram-27XIBGKW.CyOP1ZzS.js\",\"/_astro/init.Gi6I4Gst.js\",\"/_astro/ishikawaDiagram-5VMMS53U.CxtRwh5P.js\",\"/_astro/journeyDiagram-3NMN7TZE.cEplHvan.js\",\"/_astro/kanban-definition-UXKFOSKX.CKrSYN96.js\",\"/_astro/katex.HP8lGamR.js\",\"/_astro/layout.vlE7RAfc.js\",\"/_astro/linear.TNCMTXoX.js\",\"/_astro/mindmap-definition-YA3MSWOX.W8E735MN.js\",\"/_astro/ordinal.BYWQX77i.js\",\"/_astro/pegDiagram-XKGWAZYB.g1POtSNE.js\",\"/_astro/pieDiagram-E7YTZNPT.BlYyJijK.js\",\"/_astro/preload-helper.BlTxHScW.js\",\"/_astro/quadrantDiagram-AXDQQJYC.C2n9Cq1z.js\",\"/_astro/railroadDiagram-O6MQD6OU.D8lCNgW6.js\",\"/_astro/requirementDiagram-BXWQKSXE.jmIFdI24.js\",\"/_astro/sankeyDiagram-P5KCCOFB.DjYQWZhF.js\",\"/_astro/sequenceDiagram-WJ2MYXX4.BbgNo7GB.js\",\"/_astro/sizeCapture-INFHLROL.Cg_exfM7.js\",\"/_astro/stateDiagram-D77RDMKH.C2Ty6NZh.js\",\"/_astro/stateDiagram-v2-MP3YSRHH.DDU2qlbV.js\",\"/_astro/swimlanes-42K2YHIH.BRvshHny.js\",\"/_astro/swimlanesDiagram-VR7AAH4N.BDgErGTN.js\",\"/_astro/timeline-definition-24CTP7MA.DxnZkKEt.js\",\"/_astro/vennDiagram-4TSXK5OY.DZ5vc5F7.js\",\"/_astro/wardleyDiagram-VM6X3IG4.DHH7ooPK.js\",\"/_astro/xychartDiagram-S5SC5T6Z.FpDPYVdx.js\",\"/about/\",\"/blog/\",\"/blog/callouts/\",\"/blog/chess-test/\",\"/blog/code-highlighting/\",\"/blog/diagramme/\",\"/blog/formeln/\",\"/blog/hallo-welt/\",\"/blog/hello-world/\",\"/blog/how-this-blog-works/\",\"/blog/info-boxen/\",\"/blog/math-test/\",\"/blog/mermaid-test/\",\"/blog/schachstellungen/\",\"/blog/syntax-highlighting/\",\"/blog/wie-dieser-blog-funktioniert/\",\"/datenschutz/\",\"/en/\",\"/favicon.svg\",\"/feed.json\",\"/humans.txt\",\"/impressum/\",\"/llms-full.txt\",\"/llms.txt\",\"/manifest.webmanifest\",\"/og-default.svg\",\"/og/callouts.svg\",\"/og/chess-test.svg\",\"/og/code-highlighting.svg\",\"/og/diagramme.svg\",\"/og/formeln.svg\",\"/og/hallo-welt.svg\",\"/og/hello-world.svg\",\"/og/how-this-blog-works.svg\",\"/og/info-boxen.svg\",\"/og/math-test.svg\",\"/og/mermaid-test.svg\",\"/og/schachstellungen.svg\",\"/og/syntax-highlighting.svg\",\"/og/wie-dieser-blog-funktioniert.svg\",\"/pwa-icon-192.png\",\"/pwa-icon-512.png\",\"/pwa-icon-maskable.png\",\"/robots.txt\",\"/search.json\",\"/security.txt\",\"/series/\",\"/series/behind-the-scenes/\",\"/series/feature-tour/\",\"/tags/\",\"/tags/code/\",\"/tags/meta/\",\"/tags/reference/\"]");

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // one bad URL shouldn't fail the whole install
      Promise.allSettled(PRECACHE.map((url) => cache.add(url))),
    ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("abt-") && key !== CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/")),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        }),
    ),
  );
});
