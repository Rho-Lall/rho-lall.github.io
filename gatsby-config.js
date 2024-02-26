module.exports = {
  siteMetadata: {
    title: `Assume Wisely`,
    siteUrl: `https://assumewisely.com`,
    author: `Rho Lall`,
    keywords: `business intelligence reporting, data driven decision making, using data to make decisions`,
    image: '/thoughts/media/data_savvy_3.png',
    description: `Business intelligence reporting resources to use data to make better decisions for your business.`,
    og: {
      siteName: 'Fostering a Data Driven Culture with Data Driven Storytelling',
      twitterCreator: '@rho_lall'
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-5RV9B2QZSZ", // Google Analytics / GA
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
    "@hotjar/browser"
    
  ],

  pathPrefix: "",

}
