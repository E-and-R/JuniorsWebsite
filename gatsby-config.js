module.exports = {
  siteMetadata: {
    title: `Junior Morba`,
    titleTemplate:  "%s · Junior Moraba",
    description: `Personal website of Junior Moraba`,
    url: "http://www.juniormoraba.co.za",
    image: "/images/serious2.jpg",
    author: `@Junior_Moraba`,
  },
  plugins: [
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Junior moraba`,
        short_name: `JnrMoraba`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/myLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
