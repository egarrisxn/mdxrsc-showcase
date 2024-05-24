export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'http://mdxrsc-showcase.vercel.app/sitemap.xml',
    host: 'http://mdxrsc-showcase.vercel.app',
  }
}
