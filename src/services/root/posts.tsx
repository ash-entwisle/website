import { Hono } from 'hono'

let app = new Hono()

app.get('/', (c) => {
  return c.redirect('/blog', 301)
})

app.get('/:id', async (c) => {
  const id = c.req.param('id')
  const html = ""; // TODO: generate the html, put into TS object and then read it and insert it into template
  // return c.text("This will be a Blogpost:" + html, 'text/html');

  return c.body("This will be a blogpost:" + html ,200, {
    "Content-Type": "text/html; charset=utf-8",
  });
})

export default app
