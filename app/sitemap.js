import getNotes from './lib/get-notes'
import getPosts from './lib/get-posts'

export default async function sitemap() {
  const posts = await getPosts()
  const notes = await getNotes()

  const blogs = posts
    .map((post) => ({
      url: `http://mdxrsc-showcase.vercel.app/${post.slug}`,
      lastModified: post.lastModified
        ? new Date(post.lastModified).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
    }))
    .concat(
      notes.map((note) => ({
        url: `http://mdxrsc-showcase.vercel.app/notes/${note.slug}`,
        lastModified: note.lastModified
          ? new Date(note.lastModified).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
      })),
    )

  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `http://mdxrsc-showcase.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
