module.exports = {
  siteMetadata: {
    title: `rho-lall.github.io`,
    siteUrl: `https://rho-lall.github.io`,
    author: `Rho Lall`,
    keywords: `business intelligence reporting, data driven decision making, data driven decisions, using data to make decisions`,
    image: '/thoughts/media/data_savvy_3.png',
    descrption: `Drive data driven decision making, leverage business intelligence reporting to empower leaders by using data to make decisions.`

  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-097E0H123B", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
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
    "gatsby-plugin-sitemap",
    
  ],

  pathPrefix: "",

}
