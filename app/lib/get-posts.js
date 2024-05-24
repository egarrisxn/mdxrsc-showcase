import { cache } from 'react'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

const thirdPartyPosts = [
  {
    title: '#3 | A Paradigm Shift',
    description:
      'The Ascendance of AI in Software and Web Development: A Paradigm Shift',
    body: '',
    date: '2024-04-05',
    slug: 'a-paradigm-shift',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://www.egxblog.net/blog/a-paradigm-shift',
    type: 'post',
  },
  {
    title: '#2 | #buildinpublic',
    description:
      'UNVEILING THE AWESOMENESS OF #BuildingInPublic: A RADICAL APPROACH TO TRANSPARENCY AND CONNECTION',
    body: '',
    date: '2024-02-21',
    slug: 'build-in-public',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://www.egxblog.net/blog/build-in-public',
    type: 'post',
  },
  {
    title: '#1 | Here Goes Nothing',
    description: 'Embarking on a Journey through the Technological Realm',
    body: '',
    date: '2024-01-02',
    slug: 'here-goes-nothing',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://www.egxblog.net/blog/here-goes-nothing',
    type: 'post',
  },
]

export const getPosts = cache(async (includeThirdPartyPosts) => {
  const posts = await fs.readdir('./posts/')

  const postsWithMetadata = await Promise.all(
    posts
      .filter(
        (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx',
      )
      .map(async (file) => {
        const filePath = `./posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }
        const withoutLeadingChars = filePath.substring(2).replace('.mdx', '.md')

        const fetchUrl =
          process.env.NODE_ENV === 'production'
            ? `https://api.github.com/repos/egarrisxn/mdxrsc-showcase/commits?path=${withoutLeadingChars}&page=1&per_page=1`
            : `http://localhost:3000/mock-commit-response.json`

        const commitInfoResponse = await fetch(fetchUrl, {
          headers: {
            Authorization: process.env.GITHUB_TOKEN ?? '',
          },
        })
        const commitInfo = await commitInfoResponse.json()
        let lastModified = 0
        if (commitInfo?.length) {
          lastModified = new Date(commitInfo[0].commit.committer.date).getTime()

          if (
            lastModified - new Date(data.date).getTime() <
            24 * 60 * 60 * 1000
          ) {
            lastModified = 0
          }
        }

        return { ...data, body: content, lastModified, type: 'post' }
      }),
  )

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ]

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
    )

  return filtered
})

export async function getPost(slug) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts
