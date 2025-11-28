import * as React from 'react'
import { graphql } from 'gatsby'
// In Gatsby 5, we render MDX content directly
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Helmet } from 'react-helmet'
import { LeadCaptureForm } from '../../funnel-0ps'
// import icon from "../../src/images/e_gliph_white.png"
// import imageSquare from "../../../thoughts/media/social/business_share.png"

// API endpoint for form submissions
const apiEndpoint = 'https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads'
const buttonText = 'Ten cent, My two cents is free'

const BlogPost = ({ data, children }) => {

  const urlslug = `https://rho-lall.github.io/thoughts/${data.mdx.fields.slug}`
  const featureimage = getImage(data.mdx.frontmatter.hero_image)
  const socialimage = `https://rho-lall.github.io${getSrc(data.mdx.frontmatter.hero_image)}`
  // const favicon = siteUrl + icon
  // const socialimagesq = "https://rho-lall.github.io" + imageSquare

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Helmet>
        <meta property="og:title" content={data.mdx.frontmatter.title} />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={data.mdx.frontmatter.short} />
        <meta property="og:image" content={socialimage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={urlslug} />
        <meta property="og:site_name" content="rho-lall.github.io" />
        <link rel="canonical" href={urlslug} />
        {/* <link rel="icon" href={favicon}/> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={socialimage} />
        <meta name="twitter:creator" content="@rho_Lall"></meta>
        <meta name="twitter:title" content={data.mdx.frontmatter.title} />
        <meta name="title" content={data.mdx.frontmatter.title} />
        <meta name="description" content={data.mdx.frontmatter.short} />
        <meta name="keywords" content={data.mdx.frontmatter.keywords} />
        <meta name="author" content="Rho Lall" />
      </Helmet>

      <GatsbyImage
        image={featureimage}
        alt={data.mdx.frontmatter.hero_alt}
      />

      <h1 className='heading'>{data.mdx.frontmatter.title}</h1>

      <p className='heading-posted mb-10'>Posted: {data.mdx.frontmatter.date}</p>

      <div className="prose prose-lg max-w-none">
        {children}
      </div>



      <footer className='mt-20'>
        <div>
          <h2 className='text-center'>Don't Miss My Next Thought,</h2>
          <br />
        </div>
        <div className="max-w-md mx-auto">
          <LeadCaptureForm apiEndpoint={apiEndpoint} buttonText={buttonText} />
        </div>

        <p className='my-20'> © {new Date(data.mdx.frontmatter.date).getFullYear()} &middot; Rho Lall</p>
      </footer>
    </Layout>
  )
}

export const query = graphql`
query blogPost($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      short
      keywords
      hero_alt
      date(formatString: "MMMM D, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fields {
      slug
    }
    excerpt
  }
}
`

export default BlogPost