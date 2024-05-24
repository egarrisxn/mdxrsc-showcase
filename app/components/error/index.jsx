import styles from './error.module.css'
import PostsList from '../../components/posts-list'

export default async function Error({ status, posts: postsPromise }) {
  const posts = await postsPromise
  return (
    <>
      {status === 404 ? (
        <section>
          <h1 className={styles.first}>
            This is not the page you are looking for.
          </h1>
          <h2 className={styles.second}>Maybe it was one of these?</h2>
          <span className={styles.third}>
            <PostsList paginate={true} posts={posts} />
          </span>
        </section>
      ) : (
        <section className={styles.section}>
          <span>{status || '?'}</span>
          <p>An error occurred.</p>
        </section>
      )}
    </>
  )
}
