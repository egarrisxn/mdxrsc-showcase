import {ImageResponse} from 'next/og'
export const runtime = 'edge'

const font = fetch(new URL('./fonts/Inter-Medium.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer(),
)

const handler = async (req) => {
  const fontData = await font
  const {searchParams} = new URL(req.url)
  const title = searchParams.get('title')
  const date = searchParams.get('date')

  if (!title) {
    return new Response('Missing title', {status: 400})
  }

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
                color: 'yellow',
                padding: '10px 10px 0px 0px',
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
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 500,
        },
      ],
      width: 1200,
      height: 630,
    },
  )
}

export default handler
