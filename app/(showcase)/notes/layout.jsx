import Outline from '../../components/layout-outline'

export const metadata = {
  title: 'Notes',
  description: 'Notes.',
  alternates: {
    canonical: 'https://mdxrsc-showcase.vercel.app/notes',
  },
}

export default function NotesLayout({children}) {
  return (
    <Outline type='layout' name='Notes'>
      <article>{children}</article>
    </Outline>
  )
}
