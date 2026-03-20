/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.epitheliaclinic.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1.0,
  
  // Include all your pages
  additionalPaths: async (config) => {
    return [
      // Main pages
      await config.transform(config, '/about', { changefreq: 'weekly', priority: 0.9 }),
      await config.transform(config, '/treatments', { changefreq: 'weekly', priority: 0.9 }),
      await config.transform(config, '/technology', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/blogs', { changefreq: 'weekly', priority: 0.8 }),
      await config.transform(config, '/gallery', { changefreq: 'weekly', priority: 0.75 }),
      await config.transform(config, '/book', { changefreq: 'weekly', priority: 0.85 }),
      
      // Treatment pages
      await config.transform(config, '/treatments/hair-rejuvenation', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/treatments/skin-rejuvenation', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/treatments/laser-and-light-therapy', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/treatments/anti-ageing', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/treatments/laser-hair-reduction', { changefreq: 'monthly', priority: 0.85 }),
      await config.transform(config, '/treatments/preventive-and-maintenance-care', { changefreq: 'monthly', priority: 0.85 }),
      
      // Blog posts
      await config.transform(config, '/blogs/indian-skin-care', { changefreq: 'monthly', priority: 0.7 }),
      await config.transform(config, '/blogs/hair-loss-in-30s', { changefreq: 'monthly', priority: 0.7 }),
      await config.transform(config, '/blogs/laser-technology', { changefreq: 'monthly', priority: 0.7 }),
    ];
  },
  
  // Exclude these from sitemap
  exclude: ['/server-sitemap.xml', '/404'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
