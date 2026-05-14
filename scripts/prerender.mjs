// Prerender the home route to dist/client/index.html so Netlify can serve as static SPA.
import { writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const serverEntry = resolve(root, "dist/server/index.js");
const outFile = resolve(root, "dist/client/index.html");

if (!existsSync(serverEntry)) {
  console.error("[prerender] dist/server/index.js missing — run vite build first");
  process.exit(1);
}

const mod = await import(pathToFileURL(serverEntry).href);
const worker = mod.default;
if (!worker?.fetch) {
  console.error("[prerender] worker has no fetch()");
  process.exit(1);
}

const req = new Request("http://localhost/", { method: "GET" });
const env = { ...process.env };
const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };

const res = await worker.fetch(req, env, ctx);
const html = await res.text();
if (!html || res.status >= 400) {
  console.error("[prerender] bad response", res.status);
  process.exit(1);
}
writeFileSync(outFile, html, "utf8");
console.log(`[prerender] wrote ${outFile} (${html.length} bytes)`);
