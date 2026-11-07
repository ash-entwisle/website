import { Hono } from 'hono'
import { raw } from 'hono/html'

import blog from './blog'
import links from './links'
import posts from './posts'
import rss from './rss'
import { BlogPosts } from '../../utils/posts'
import { BaseLayout } from '../../components/layout'
import { Config } from '../../../config'

const app = new Hono()


app.get('/', (c) => {

  // TODO: check if readme exists in the built blogpost ts object, if so, use the html as the homepage, if not, use h1 title and p description from conf.

  const readme = BlogPosts.find((p) => p.slug === 'readme')

  // get base templtae, insert readme into it, and render that

  const props = {
    title: readme?.frontmatter.title ?? Config.title,
    description: readme?.frontmatter.description ?? Config.desc,
  }

  return c.html(
    <BaseLayout {...props}>
      {raw(readme?.html ?? "")}
    </BaseLayout>
  )

  // const html =

  // return c.text('Hello, world! This will soon be my new website!')
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
