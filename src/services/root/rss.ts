import { Hono } from "hono"


let app = new Hono();

// generate a rss feed for the website

app.get("/rss.xml", (c) => {
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
  return c.text(rss, "application/rss+xml");
});

export default app;
