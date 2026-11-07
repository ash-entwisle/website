import { Hono } from "hono"
import { BlogPosts } from "../../utils/posts";


let app = new Hono();


app.get("/rss.xml", (c) => {

  const tags = c.req.query("tags")?.split(",").map((t) => t.trim().toLowerCase()) ?? [];


  // get posts object from utils/posts.ts, filter by tags if any, and generate rss xml from it

  const p = BlogPosts.filter((post) => {
    if (post.frontmatter.draft) return false;
    if (tags.length === 0) return true;
    const postTags = post.frontmatter.tags.map((t) => t.toLowerCase());
    return tags.every((tag) => postTags.includes(tag));
  });

  const items = p.map((post) => {
  return `<item>
      <title>${post.frontmatter.title}</title>
      <link>https://entwisle.dev/blog/${post.slug}</link>
      <description>${post.frontmatter.description}</description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
    </item>`;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>entwisle.dev</title>
      <link>https://entwisle.dev</link>
      <description>A personal website for Ash Entwisle</description>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <pubDate>${new Date().toUTCString()}</pubDate>
      ${items}
    </channel>
  </rss>`;
  return c.body(rss, 200, {
    "Content-Type": "application/xml; charset=utf-8",
  })
});

export default app;
