require('dotenv').config({
  path: `config/.env`,
});

module.exports = {
  siteMetadata: {
    title: `Industrial designer`,
    description: `Sketch / Design / Portfolio`,
    author: `@kihyeon`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/constants/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kihyeon Kim`,
        short_name: `KHK`,
        start_url: `/`,
        background_color: `#FFE1A4`,
        theme_color: `#FFE1A4`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/views/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/views/styles/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans KR', 'Noto Sans', 'Playfair Display'],
        },
      },
    },
  ],
};
