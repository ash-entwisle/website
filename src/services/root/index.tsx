import { Hono } from 'hono'

const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello, world! This will soon be my new website!')
})

app.get('/favicon.ico', (c) => {
  return c.redirect('https://cdn.entwisle.dev/favicon.ico', 301)
})

app.notFound((c) => {
 return c.text('404 Not Found', 404)
})

app.onError((err, c) => {
  return c.text('Internal Server Error', 500)
})


export default app
