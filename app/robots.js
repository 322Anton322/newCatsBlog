export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/staticCats/',
      },
      sitemap: 'http://localhost:3000/sitemap.xml',
    }
  }