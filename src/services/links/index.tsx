import { Hono } from 'hono'
import redir from '../../utils/redir'
import { Config } from '../../../config'
import { TLink } from '../../types/config'

const app = new Hono()

// make a hello, world at root

app.get('/', (c) => {
  return c.text('Hello, world! This will soon be my new linktree')
})

// actual redirect bs
app.get('/:link', (c) => {
  const link = c.req.param('link')

  const link_data = Config.links.find((l: TLink) => l.link === link);

  if (link_data) {
    return c.redirect(link_data.href, 301)
  }
})

app.route('', redir)

export default app
