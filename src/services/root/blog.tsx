import { Hono } from "hono";
import { Config } from "../../../config";


let app = new Hono()

app.get('/', async (c) => {

  // TODO: get xml feed, and dynamically create list of blogposts and have a filter system for tags and categories, and a search bar.

  const res = await fetch(`https://${Config.website.base}/rss.xml`);
  return c.body(await res.text(), 200, {
    "Content-Type": "application/xml; charset=utf-8",
  });
  // const r = new Request(`${Config.website.base}/rss.xml`);


  return c.text("This will be where the list of blog posts will be displayed, with links to each post");
})

export default app
