import {cache} from 'react'

const Projects = [
  {
    title: 'Sway Bae Official',
    description: 'Personal site for streamer & content creator, Sway Bae.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'EGxBLOG',
    description: 'My first attempt at a blog.',
    href: 'https://github.com/egarrisxn/egxblog',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
  {
    title: 'EGxWORLD',
    description: 'My personal website.',
    href: 'https://github.com/egarrisxn/egxworld',
    role: 'Creator',
    years: ['2024'],
    type: 'project',
  },
]

export const getProjects = cache(async () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('No GITHUB_TOKEN provided. Generate a personal use token on GitHub.')
  }

  const withStars = await Promise.all(
    Projects.map(async (proj) => {
      const split = proj.href?.split('/')
      if (!split) {
        return proj
      }

      if (split[2] === 'github.com') {
        const user = split[3]
        const repo = split[4]
        const fetchUrl =
          process.env.NODE_ENV === 'production'
            ? `https://api.github.com/repos/${user}/${repo}`
            : 'http://localhost:3000/mock-stars-response.json'
        const {stargazers_count, message} = await (
          await fetch(fetchUrl, {
            headers: {
              Authorization: process.env.GITHUB_TOKEN ?? '',
            },
            cache: 'force-cache',
          })
        ).json()

        if (!stargazers_count && message) {
          console.warn(`Rate limited or error: ${message}`)
          return proj
        }

        return {
          ...proj,
          stars: stargazers_count,
        }
      }
      return proj
    }),
  )

  return withStars
})
