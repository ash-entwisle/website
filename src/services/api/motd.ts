import { Hono } from 'hono'
import { motd } from '../../utils/motd';

const app = new Hono()

// will this do it?
app.get('/', (c) => {
  return c.text(motd());
})

export default app
