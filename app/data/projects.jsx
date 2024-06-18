import {cache} from 'react'

const Projects = [
  {
    title: 'Unofficial Merchandise',
    description: 'A fully functional Ecommerce site configured with Stripe & Nextjs.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'WebSanity Builder',
    description: 'An easy-to-use website builder powered by Sanity & Nextjs.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'n00b:dev',
    description: 'A fun little server-side rendered blog using the Astro framework.',
    href: 'https://github.com/egarrisxn/n00bdev',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'DevBuild Resume',
    description: 'A beautiful resume template for all my developer friends out there!',
    href: 'https://github.com/egarrisxn/devbuild-resume',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'PEHN User Management',
    description: 'A minimalist CRUD application using resources like Pug, HTMX, & others.',
    href: 'https://github.com/egarrisxn/pehn-user-management',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Vanilla Template',
    description: 'A little portfolio template using only HTML5, CSS3, & JavaScript.',
    href: 'https://github.com/egarrisxn/portfolio-template',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'Sway Bae Official',
    description: 'Professional website for streamer & content creator, Sway_Bae.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
  {
    title: 'EG x WORLD',
    description: 'My personal website..spun up with Nextjs.',
    href: 'https://github.com/egarrisxn/egxworld',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
  {
    title: 'EG x BLOG',
    description: 'My personal blog..also spun up with Nextjs.',
    href: 'https://github.com/egarrisxn/egxblog',
    role: 'Creator',
    years: ['2023', '2024'],
    type: 'project',
  },
  {
    title: 'MVC Tech Forum',
    description: 'A CMS-style forum application, using Handlebars, Bootstrap, & more.',
    href: 'https://github.com/egarrisxn/mvc-tech-forum',
    role: 'Creator',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'Note Taking with Express',
    description: 'A simple, yet useful CRUD application, with help from the likes of Express.',
    href: 'https://github.com/egarrisxn/express-note-taker',
    role: 'Creator',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'The Weather Dashboard',
    description: 'Fast & lightweight web-based weather app. Done up with jQuery + others.',
    href: 'https://github.com/egarrisxn/weather-dashboard',
    role: 'Creator',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'Quiz Game: Code Edition',
    description:
      'A simple mind game to sharpen your knowledge for coding. Also done up with jQuery.',
    href: 'https://github.com/egarrisxn/quiz-game',
    role: 'Creator',
    years: ['2023'],
    type: 'project',
  },
  {
    title: 'Player One Reads',
    description:
      'My first project! A book recommendation app based on your video game preferences.',
    href: 'https://github.com/egarrisxn/Player-one-reads',
    role: 'Co-Creator',
    years: ['2023'],
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
