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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            }
          }
        ]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 3881909,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Assume Wisely - All Posts",
            description: "Business intelligence reporting resources to use data to make better decisions for your business.",
          },
          // AI Strategy RSS Feed
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { expertise: { eq: "AI Strategy" } } }
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/ai-strategy/rss.xml",
            title: "Assume Wisely - AI Strategy",
            description: "AI Strategy insights and business intelligence reporting resources.",
          },
          // Artificial Intelligence RSS Feed
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { expertise: { eq: "Artificial Intelligence" } } }
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/artificial-intelligence/rss.xml",
            title: "Assume Wisely - Artificial Intelligence",
            description: "Artificial Intelligence and data science programming resources.",
          },
          // Analytics Engineering RSS Feed
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { expertise: { eq: "Analytics Engineering" } } }
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/analytics-engineering/rss.xml",
            title: "Assume Wisely - Analytics Engineering",
            description: "Analytics Engineering and BI development insights.",
          },
          // Design RSS Feed
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { expertise: { eq: "Design" } } }
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/design/rss.xml",
            title: "Assume Wisely - Design",
            description: "Data-driven design and marketing insights.",
          },
          // My Journey RSS Feed
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.short || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  guid: site.siteMetadata.siteUrl + '/thoughts/' + node.fields.slug.replace(/_/g, '-'),
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { expertise: { eq: "My Journey" } } }
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      short
                      expertise
                    }
                  }
                }
              }
            `,
            output: "/my-journey/rss.xml",
            title: "Assume Wisely - My Journey",
            description: "Personal insights and journey in data-driven storytelling.",
          },
        ],
      },
    },

  ],

  pathPrefix: "",


}
