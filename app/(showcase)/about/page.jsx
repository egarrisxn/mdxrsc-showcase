import Link from '../../components/link'

export const metadata = {
  title: 'About',
  description: 'About.',
  alternates: {
    canonical: 'https://mdxrsc-showcase.vercel.app/about',
  },
}

export default function About() {
  return (
    <article>
      <p>
        This site is using the powrful{' '}
        <Link external href='https://nextjs.com'>
          Next.js 14
        </Link>{' '}
        App Directory and is deployed with{' '}
        <Link external href='https://vercel.com/home'>
          Vercel
        </Link>
        . You can view the repository over on my{' '}
        <Link external href='https://github.com/egarrisxn'>
          GitHub
        </Link>
        .
      </p>
    </article>
  )
}
