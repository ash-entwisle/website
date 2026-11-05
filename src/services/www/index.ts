import { Hono } from 'hono'
import redir from '../../utils/redir'

const app = new Hono()

app.route('', redir)

export default app
