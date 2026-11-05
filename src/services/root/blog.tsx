import { Hono } from "hono";


let app = new Hono()

app.get('/', (c) => {
  return c.text("This will be where the list of blog posts will be displayed, with links to each post");
})

export default app
