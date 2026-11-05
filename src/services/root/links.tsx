import { Hono } from "hono";
import { Config } from "../../../config";


let app = new Hono()

// redirect all requests from here to links.baseurl/ljdfdkjfad.ffdasfdsafdsa

app.get('*', (c) => {
  const path = c.req.path
  const newUrl = `https://${Config.website.base}${path}`
  return c.redirect(newUrl, 301)
})

export default app
