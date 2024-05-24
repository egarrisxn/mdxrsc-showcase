import {ImageResponse} from 'next/og'

export const alt = ''
export const size = {width: 1200, height: 600}
export const contentType = 'image/png'
export const runtime = 'edge'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function ({params}) {
  const res = await fetch(
    `https://raw.githubusercontent.com/egarrisxn/mdxrsc-showcase/master/posts/${params.slug}.mdx`,
  )

  if (!res.ok) {
    return new Response('Not found', {status: 404})
  }

  const text = await res.text()
  const title = text.match(/title: (.*)/)?.[1]
  const date = text.match(/date: (.*)/)?.[1]

  if (!title) {
    return new Response('Missing title', {status: 400})
  }

  const fontData = fetch(new URL('../../../fonts/Inter-Medium.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer(),
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          fontWeight: 800,
          background: '#000',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            padding: '10px 0px 0px 10px',
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: 'fuchsia',
              padding: '10px 0px 0px 10px',
            }}
          >
            ||||
          </span>
          {date && (
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: 'fuchsia',
                padding: '10px 0px 0px 10px',
              }}
            >
              {date}
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 50px',
            color: 'white',
            textAlign: 'center',
            height: 630 - 50 - 50,
            maxWidth: 1000,
          }}
        >
          {title && (
            <div
              style={{
                fontSize: 65,
                fontWeight: 800,
                marginBottom: 40,
                lineHeight: 1,
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await fontData,
          style: 'normal',
          weight: 500,
        },
      ],
    },
  )
}
