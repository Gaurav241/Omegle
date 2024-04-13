import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
    },
    sitemap: 'https://Omeglee.com/sitemap.xml',
  }
}