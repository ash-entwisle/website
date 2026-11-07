

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import {marked} from 'marked'

const postsDir = './posts'
const outputDir = './src/utils'
const outputFile = `${outputDir}/posts.ts`

const files = fs.readdirSync(postsDir)
  .filter((file: string) => file.endsWith('.md'))

const posts = files.map((file: string) => {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
  const slug = file.replace(/\.md$/, '')
  const { data, content } = matter(raw)
  const html = marked(content)

  return {
    slug,
    frontmatter: data,
    content,
    html
  }
})

fs.mkdirSync(outputDir, { recursive: true })

fs.writeFileSync(
  outputFile,
  `export const BlogPosts = ${JSON.stringify(posts, null, 2)} as const`
)



console.log(`Successfully built ${posts.length} posts and saved to ${outputFile}`)
