import Outline from '../../components/layout-outline'

export const metadata = {
  title: 'Blog',
  description: 'Blog.',
  alternates: {
    canonical: 'https://mdxrsc-showcase.vercel.app/blog',
  },
}

export default function BlogLayout({ children }) {
  return (
    <Outline type="layout" name="Blog">
      <article>{children}</article>
    </Outline>
  )
}
