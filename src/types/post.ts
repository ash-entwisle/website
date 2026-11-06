
export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags?: string[]
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  html: string
}
