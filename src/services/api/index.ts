import { Hono } from 'hono'
import { Config } from '../../../config';
import motd from './motd'

const app = new Hono()

app.route("motd", motd)

app.get('*', (c) => {
  const url = c.req.url
  const newUrl = `https://www.${Config.website.base}${url}`
  return c.redirect(newUrl, 301)
});

export default app
