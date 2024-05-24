import {cache} from 'react'
import {readFiles} from './read-files'

export const getNotes = cache(async () => {
  const notesWithMetadata = readFiles('./notes/')

  const filtered = notesWithMetadata
    .filter((note) => note !== null)
    .sort((a, b) => (a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0))

  return filtered
})

export async function getNote(slug) {
  const notes = await getNotes()
  return notes.find((note) => note.slug === slug)
}

export default getNotes
