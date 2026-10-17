/* eslint-disable react-refresh/only-export-components -- build-time server entry, never hot-reloaded */
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

export { ROUTES, SITE } from "./lib/seo";

// Build-time renderer used by scripts/prerender.mjs. Waits for every lazy route (onAllReady) so the
// returned HTML is the complete page, and collects the <head> tags that SEOHead set via Helmet.
export function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const sink = new PassThrough();
    sink.on("data", (chunk: Buffer) => chunks.push(chunk));
    sink.on("end", () => {
      const h = helmetContext.helmet;
      const head = h
        ? [h.title, h.priority, h.meta, h.link, h.script, h.style].map((part) => part.toString()).join("\n")
        : "";
      resolve({ html: Buffer.concat(chunks).toString("utf8"), head });
    });

    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
