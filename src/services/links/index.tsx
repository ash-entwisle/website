import { Hono } from 'hono'
import redir from '../../utils/redir'

const app = new Hono()

// make a hello, world at root

app.get('/', (c) => {
  return c.text('Hello, world! This will soon be my new linktree')
})

app.route('', redir)

export default app
