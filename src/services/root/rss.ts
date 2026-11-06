import { Hono } from "hono"


let app = new Hono();


app.get("/rss.xml", (c) => {

  const tags = c.req.query("tags")?.split(",").map((t) => t.trim().toLowerCase()) ?? [];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>entwisle.dev</title>
      <link>https://entwisle.dev</link>
      <description>A personal website for Ash Entwisle</description>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </channel>
  </rss>`;
  return c.body(rss, 200, {
    "Content-Type": "application/xml; charset=utf-8",
  })
});

export default app;
