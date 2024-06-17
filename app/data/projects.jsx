import {cache} from 'react'

const Projects = [
  {
    title: 'Sway Bae Official',
    description: 'Professional website for streamer & content creator, Sway Bae.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
  {
    title: 'Unofficial Merch Store',
    description: 'A fully functional Ecommerce site configured with Stripe.',
    href: 'https://github.com/egarrisxn/egarrisxn-ecommerce',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Sanity Website Builder',
    description: 'An easy-to-use website builder powered by Sanity.',
    href: 'https://github.com/egarrisxn/website-builder',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Build That Resume',
    description: 'A beautiful resume template for my developers out there!',
    href: 'https://github.com/egarrisxn/build-that-resume',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Astro SSR Blog',
    description: 'A fun server-side rendered blog using the Astro framework.',
    href: 'https://github.com/egarrisxn/astro-ssr-blog',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'A Vanilla Template',
    description: 'A little portfolio template using only HTML, CSS, & JS.',
    href: 'https://github.com/egarrisxn/portfolio-template',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'EGxWORLD',
    description: 'My personal page.',
    href: 'https://github.com/egarrisxn/egxworld',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
  {
    title: 'EGxBLOG',
    description: 'My first attempt at a blog.',
    href: 'https://github.com/egarrisxn/egxblog',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
]

export const getProjects = cache(async () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('No GITHUB_TOKEN provided. Generate a personal use token on GitHub.')
  }

  const projects = await Promise.all(
    Projects.map(async (proj) => {
      const split = proj.href?.split('/')
      if (!split || split[2] !== 'github.com') {
        return proj
      }

      return proj
    }),
  )

  return projects
})
