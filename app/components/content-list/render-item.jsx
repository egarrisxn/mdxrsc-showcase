'use client'
import BlockEntry from '../../components/entry/block'

export const renderItem = (item) =>
  item.type === 'post' ? renderPost(item) : renderNote(item)

export const getTag = (post) => [post.type]

function renderPost(post) {
  return (
    <BlockEntry
      key={post.slug || post.href}
      href={post.isThirdParty ? post.href : `/blog/${post.slug}`}
      title={post.title}
      date={new Date(post.date)}
      description={post.description}
      isThirdParty={post.isThirdParty}
      type={post.type || 'post'}
    />
  )
}

function renderNote(note) {
  return (
    <BlockEntry
      key={note.slug}
      href={`/notes/${note.slug}`}
      title={note.title}
      date={new Date(note.date)}
      description={note.description}
      type={note.type || 'note'}
    />
  )
}
