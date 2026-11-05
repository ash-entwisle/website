import { Hono } from 'hono'
import redir from '../../utils/redir'
import motd from './motd'

const app = new Hono()

app.route('motd', motd)
app.route('', redir)

export default app
