var Colors = require('./src/utils/colors')
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.stoponin.com`,
    title: `Stop On Inn`,
    description: `.`,
    author: `Digital Redz | David McClain (Dirtyredz)`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stop On Inn`,
        short_name: `SOI`,
        start_url: `/`,
        background_color: Colors.White,
        theme_color: Colors.Red,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stoponinn.com',
        sitemap: 'https://www.stoponinn.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,600,700,900',
            'Teko:300,400,600,700,900'
          ]
        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-sentry",
    //   options: {
    //     dsn: "https://5855b310b2644e33af154c16da12ad45@sentry.io/1449089",
    //     // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
    //     environment: process.env.NODE_ENV,
    //     enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
    //   }
    // },
  ],
}
