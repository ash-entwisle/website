import { Hono } from 'hono'

const app = new Hono()


import { Fragment } from 'hono/jsx'

const List = () => (
  <Fragment>
    <p>first child</p>
    <p>second child</p>
    <p>third child</p>
  </Fragment>
)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
