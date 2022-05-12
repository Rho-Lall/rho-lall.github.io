module.exports = {
  siteMetadata: {
    title: `Assume Wisely`,
    siteUrl: `https://rho-lall.github.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `thoughts`,
        path: `${__dirname}/thoughts`,
      }
    },
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth:1200,
            }
          }
        ]
      }
    },
    
  ],

  pathPrefix: "",

}