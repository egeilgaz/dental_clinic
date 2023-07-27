/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    "gatsby-plugin-netlify",
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`tr`, `gb`, `es`],
        defaultLanguage: `tr`,
        //siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/blog/:uid',
        //     excludeLanguages: ['es'],
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en'],
        //   },
        // ],
      },
    },
  ],
}
