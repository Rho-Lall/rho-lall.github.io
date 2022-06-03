module.exports = {
  siteMetadata: {
    title: `rho-lall.github.io`,
    siteUrl: `https://rho-lall.github.io`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
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
