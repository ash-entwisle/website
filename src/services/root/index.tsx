import { Hono } from 'hono'

import blog from './blog'
import links from './links'
import posts from './posts'
import rss from './rss'

const app = new Hono()


app.get('/', (c) => {

  // TODO: check if readme exists in the built blogpost ts object, if so, use the html as the homepage, if not, use h1 title and p description from conf.
  return c.text('Hello, world! This will soon be my new website!')
})


app.route('links', links);
app.route('blog', blog);
app.route('posts', posts);
app.route('/', rss)




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
