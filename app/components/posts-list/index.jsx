'use client'
import styles from './posts-list.module.css'
import { useState } from 'react'
import BlockEntry from '../entry/block'

export default function Posts(props) {
  const [showMore, setShowMore] = useState(4)

  if ('skeleton' in props) {
    return (
      <ul className={styles.container}>
        {[...Array(4)].map((_, i) => (
          <BlockEntry key={i} skeleton />
        ))}
      </ul>
    )
  }

  const { posts, paginate } = props

  return (
    <ul className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })

        return (
          <BlockEntry
            key={`post-item-${post.slug || Math.random()}`}
            href={post.isThirdParty ? post.href : `/blog/${post.slug}`}
            title={post.title}
            date={new Date(date)}
            views={post.views}
            isThirdParty={post.isThirdParty}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4)
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </ul>
  )
}
