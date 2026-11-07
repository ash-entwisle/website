import { Hono } from 'hono'
import { Config } from '../config';

const app = new Hono()


app.get('*', (c) => {
  const path = c.req.path
  const newUrl = `https://${Config.website.base}${path}`
  return c.redirect(newUrl, 301)
});

export default app
