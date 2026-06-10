import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://renownedmedia.in';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.8' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'daily', priority: '0.8' }
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${DOMAIN}${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log('Sitemap XML dynamically constructed at public/sitemap.xml');
