import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {Helmet} from 'react-helmet'
import imageTwitter from "../../thoughts/media/business_twitter.png"  

const BlogPost = ({data}) => {

  const image = getImage(data.mdx.frontmatter.hero_image)
  const urlslug = `https://rho-lall.github.io/thoughts/${data.mdx.slug}`
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <Helmet>
          <meta property="og:title" content={data.mdx.frontmatter.title}/>
          <meta property="og:type" content="blog"/>
          <meta property="og:description" content={data.mdx.frontmatter.short}/>
          <meta property="og:image" content={image}/>
          <meta property="og:locale" content="en_US"/>
          <meta property="og:url" content={urlslug}/>
          <meta property="og:site_name" content="rho-lall.github.io"/>
          <link rel="canonical" href={urlslug}/>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={imageTwitter} />
          <meta name="twitter:creator" content="@rho_Lall"></meta>
          <meta name="twitter:title" content={data.mdx.frontmatter.title}/>
          <meta name="title" content={data.mdx.frontmatter.title}/>
          <meta name="description" content={data.mdx.frontmatter.short}/>
          <meta name="keywords" content={data.mdx.frontmatter.keywords}/>
          <meta name="author" content="Rho Lall"/>
      </Helmet>

      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_alt}
      />

      <h1 className='heading'>{data.mdx.frontmatter.title}</h1>
      
      <p className='heading-posted mb-10'>Posted: {data.mdx.frontmatter.date}</p>
    
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>    

      

      <footer className='mt-20'>
        <div>
          <h2 className='text-center'>Git Sum (un)common sense,</h2>
          <br/>
        </div>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        <form action="https://app.convertkit.com/forms/3393489/subscriptions"
            className='bg-slate-100 p-1' 
            method="post" 
            data-sv-form="3393489" 
            data-uid="0d237f26ad" 
            data-format="inline" 
            data-version="5" 
            data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" 
            min-width="400 500 600 700 800"
          >
            <div className='flex space-x-8 justify-around my-1'>
              <div>
                <h2>Don't miss my next thought:</h2> 
              </div>
              <div className='text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded'>
                <input 
                  name="email_address" 
                  aria-label="Email Address" 
                  placeholder="Your Email Address" 
                  required="" 
                  type="email"
                  className='bg-slate-100'
                />
              </div>

              <div>
                <button data-element="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Make Better Decisions</span>
                </button>
              </div>

            </div>
            </form>

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
    slug
    body
  }
}
`

export default BlogPost