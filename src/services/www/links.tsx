import { Hono } from "hono";
import { Config } from "../../config";


let app = new Hono()

// redirect all requests from here to links.baseurl/ljdfdkjfad.ffdasfdsafdsa

app.get('/:link', (c) => {
  const link = c.req.param('link')
  const newUrl = `https://links.${Config.website.base}/${link}`
  return c.redirect(newUrl, 301)
})

export default app
