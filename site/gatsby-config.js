module.exports = {
  siteMetadata: {
    siteUrl: `https://handycomputerbloke.com`,
    title: `Stephen Harrison Consulting, LLC`,
    description: `Catchy domain name. Sensible company name. Results that delight.`,
    author: `stephen@harrison.org`
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`
      },
      __key: 'images'
    }
  ]
};
