import { Hono } from 'hono'

let app = new Hono()

// for /posts/:id, return the pre-generated html for the post with the given id

app.get('/posts/:id', async (c) => {
  const id = c.req.param('id')
  const html = ""; // TODO: generate the html, put into TS object and then read it and insert it into template
  return c.text("This will be a Blogpost:" + html, 'text/html');
})

export default app
