import { Hono } from 'hono'
import { BlogPosts } from '../../utils/posts'
import { BaseLayout } from '../../components/layout'
import { raw } from 'hono/html'

let app = new Hono()

app.get('/', (c) => {
  return c.redirect('/blog', 301)
})

app.get('/:id', async (c) => {
  const id = c.req.param('id')
  const post = BlogPosts.find((p) => p.slug === id)
  // return c.text("This will be a Blogpost:" + html, 'text/html');

  const props = {
    title: post?.frontmatter.title ?? "Blog Post",
    description: post?.frontmatter.description ?? "A blog post",
  }

  return c.html(
    <BaseLayout {...props}>
      {raw(post?.html ?? "")}
    </BaseLayout>
  )

  // return c.body("This will be a blogpost:" + html ,200, {
  //   "Content-Type": "text/html; charset=utf-8",
  // });
})

export default app
