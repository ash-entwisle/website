import { Hono } from 'hono'
import redir from '../../utils/redir'
import { Config } from '../../config'
import { TLink } from '../../types/config'

const app = new Hono()

// make a hello, world at root

app.get('/', (c) => {

  let s = ""

  Config.links.forEach((link: TLink) => {
    s += `<a href="${link.href}">${link.link}</a><br/>`
  })

  return c.body(s, 200, { 'Content-Type': 'text/html' })
})

// actual redirect bs
app.get('/:link', (c) => {
  const link = c.req.param('link')

  const link_data = Config.links.find((l: TLink) => l.link === link);

  if (link_data) {
    return c.redirect(link_data.href, 301)
  } else {
    return c.redirect(`https://${Config.website.base}/${link}`, 301)
  }
})

app.route('/', redir)

export default app
