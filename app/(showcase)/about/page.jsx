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
      <h5>
        The group of words below may look familiar, as they have been published one before, by me,
        over on my other{' '}
        <Link external href='https://egxworld.net'>
          personal website.
        </Link>{' '}
      </h5>
      <p>
        Greetings! My name is Ethan. I&apos;m dedicated Full-Stack Developer & Designer based in
        Orlando, Florida. My expertise lies in crafting innovative web technologies and applications
        that merge seamless functionality with elegant design.
      </p>
      <p>
        With a foundation rooted in completing a rigorous Full-Stack Coding Boot Camp at the
        University of Central Florida, I continually expand my skills through advanced coursework,
        including Harvard University&apos;s CS50. I specialize in leveraging JavaScript libraries
        and frameworks to bring creative visions to life, ensuring each project is both technically
        robust and visually engaging.
      </p>
      <p>
        Beyond coding, I find inspiration in exploring new music, enjoying quality time with family,
        and finding ways to be out in the world. These diverse interests inform my approach,
        enhancing my ability to create solutions that resonate.
      </p>
      <p>
        Let&apos;s collaborate and transform your ideas into impactful digital experiences.
        Together, we can build something extraordinary.
      </p>
      <Link href='/projects'> Projects </Link> / <Link href='/notes'> Notes </Link> /{' '}
      <Link href='/blog'> Blog </Link>
    </article>
  )
}
