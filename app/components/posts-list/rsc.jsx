import getPosts from '../../lib/get-posts'
import PostsList from '.'

export async function PostListRSC({ paginate }) {
  const posts = await getPosts(true)
  return <PostsList posts={posts} paginate={paginate} />
}
