import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { test } from "node:test";

const buildDirectory = process.env.NEXT_BUILD_DIR ?? ".next";

for (const [file, language, heading, submit] of [
  [
    "index",
    "en",
    "Build skills that actually move you forward.",
    "Send message",
  ],
  ["pt", "pt-PT", "Desenvolva competências para avançar.", "Enviar mensagem"],
]) {
  test(`production HTML for ${language}`, async () => {
    const html = await readFile(
      join(buildDirectory, "server", "app", `${file}.html`),
      "utf8",
    );
    const document = html.split("</body>")[0];
    const head = document.split("</head>")[0];
    const markup = document.split("</head>")[1].split("<script")[0];

    assert.ok(head.includes(`lang="${language}"`));
    assert.match(head, /<title>[^<]+<\/title>/);
    assert.match(head, /<meta name="description" content="[^"]+"/);
    assert.match(head, /<meta property="og:title" content="[^"]+"/);
    if (process.env.SITE_URL) {
      const url = new URL(
        language === "en" ? "/" : "/pt",
        process.env.SITE_URL,
      );
      const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
      assert.ok(canonical);
      assert.equal(new URL(canonical).href, url.href);
      assert.ok(
        head.includes('hrefLang="en"') || head.includes('hreflang="en"'),
      );
      assert.ok(
        head.includes('hrefLang="pt-PT"') || head.includes('hreflang="pt-PT"'),
      );
    }
    assert.equal((markup.match(/<h1\b/g) ?? []).length, 1);
    assert.equal((markup.match(/<section\b/g) ?? []).length, 8);
    assert.ok(markup.includes(heading));
    assert.match(markup, /<main id="main" tabindex="-1">/i);

    const links = [...markup.matchAll(/<a\b[^>]*\bhref="#([^"]+)"/g)];
    const ids = new Set(
      [...markup.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id),
    );
    for (const [, target] of links)
      assert.ok(ids.has(target), `Missing fragment #${target}`);

    const images = [...markup.matchAll(/<img\b[^>]+>/g)].map(
      ([image]) => image,
    );
    assert.ok(images.length > 0);
    for (const image of images) {
      assert.match(image, /\balt="[^"]*"/);
      assert.match(image, /\bwidth="\d+"/);
      assert.match(image, /\bheight="\d+"/);
    }
    assert.equal(
      images.filter((image) => /fetchpriority="high"/i.test(image)).length,
      1,
    );
    assert.ok(
      images.filter((image) => /\balt="[^"]+"/.test(image)).length >= 3,
    );
    assert.ok(images.some((image) => /loading="lazy"/.test(image)));

    const form = markup.match(
      /<form class="contact-form"[^>]*>(.*?)<\/form>/s,
    )?.[1];
    assert.ok(form);
    const fields = [...form.matchAll(/<label>(.*?)<\/(?:label)>/gs)].map(
      ([, field]) => field,
    );
    assert.deepEqual(
      fields.map((field) => field.match(/\bname="([^"]+)"/)?.[1]),
      ["name", "email", "message"],
    );
    assert.ok(fields.every((field) => /\brequired=""/.test(field)));
    assert.match(form, /role="status"/);
    assert.ok(form.includes(submit));
  });
}

test("production build emits two local WOFF2 fonts", async () => {
  const assets = await readdir(join(buildDirectory, "static", "media"));
  assert.equal(assets.filter((asset) => asset.endsWith(".woff2")).length, 2);
});
