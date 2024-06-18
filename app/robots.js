export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'http://egxrsc.vercel.app/sitemap.xml',
    host: 'http://egxrsc.vercel.app',
  }
}
