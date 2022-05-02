module.exports = {
  siteMetadata: {
    title: `Assume Wisely`,
    siteUrl: `https://rho-lall.github.io/assume-wisely-blog/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `thoughts`,
        path: `${__dirname}/thoughts`,
      }
    },
    "gatsby-plugin-mdx",
  ],

  pathPrefix: "/assume-wisely-blog",

}
