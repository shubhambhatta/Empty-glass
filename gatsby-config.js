/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Home",
    titleTemplate: "%s | Empty Glass",
    description: "A simple one-stop solution for new businesses that needs enterprise level softwares and designs",
    author: "Shubham Bhatta",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://www.morganbaker.dev",
    twitterUsername: "@shubhambhatta1",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
