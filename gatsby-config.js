/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const { resolve } = require("path")

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Valkyrie`,
    description: `Plantilla para crear portafolios`,
    author: `@genarogg`,
    siteUrl: `http://localhost`,
  },
  plugins: [
    /*  */
    `gatsby-plugin-offline`,
    "gatsby-plugin-remove-console",
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    /*  */
    /* `gatsby-env-variables`, */

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },

    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Valkyrie`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
