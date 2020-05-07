module.exports = {
  siteMetadata: {
    title: 'Nate Parrott’s Nice and Engaging Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-37604830-9",
      },
    },
  ],
}
