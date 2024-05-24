import styles from '../../blog/[slug]/layout.module.css'
import getNotes from '../../../lib/get-notes'
import ContentFooter from '../../../components/content-footer/footer'
import Navigation from '../../../components/content-footer/navigation'

export async function generateStaticParams() {
  const notes = await getNotes()
  return notes.map((note) => ({slug: note.slug}))
}

export async function generateMetadata({params}) {
  const note = (await getNotes()).find((p) => p?.slug === params.slug)
  return {
    title: note?.title,
    description: note?.description,
    alternates: {
      canonical: `https://mdxrsc-showcase.vercel.app/notes/${params.slug}`,
    },
  }
}

async function getData({slug}) {
  const notes = await getNotes()
  const noteIndex = notes.findIndex((p) => p?.slug === slug)

  if (noteIndex === -1) {
    throw new Error(`${slug} not found in notes. Did you forget to rename the file?`)
  }

  const note = notes[noteIndex]

  return {
    previous: notes[noteIndex + 1] || null,
    next: notes[noteIndex - 1] || null,
    ...note,
  }
}

export default async function NoteSlugLayout({children, params}) {
  const {previous, next, title, date} = await getData(params)

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
      </div>
      <article>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
      <ContentFooter />
      <Navigation previous={previous} next={next} />
    </>
  )
}
