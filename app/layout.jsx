import './styles/global.css'
import styles from './layout.module.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {ThemeProvider} from 'next-themes'
// import { Analytics } from '@vercel/analytics/react'

export const dynamic = 'force-static'

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://mdxrsc-showcase.vercel.app/'),
  title: {
    template: '%s | Showcase',
    default: 'Showcase',
  },
  description: 'Showcasing RSC & MDX.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Showcase',
    url: 'https://mdxrsc-showcase.vercel.app/',
    siteName: 'Showcase',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://mdxrsc-showcase.vercep.app/api/og?title=${encodeURIComponent('Showcase')}`,
        width: 1200,
        height: 630,
        alt: 'Showcase',
      },
    ],
  },
  twitter: {
    title: 'Showcase',
    card: 'summary_large_image',
    creator: '@eg_xo_',
  },
  icons: {
    shortcut: 'https://mdxrsc-showcase.vercel.app/favicon/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#f5f5f5'},
    {media: '(prefers-color-scheme: dark)', color: '#000'},
  ],
}
