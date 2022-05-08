
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
//import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = ({data}) => {



  return (
    <Layout pageTitle={'Data Savvy for Data Driven Decision Making'}>


     <p>First, let me introduce myself.</p>
     <p>Do you find yourself sifting through signal and noise? Is there a lot of low value data to sift through? Data is only as powerful as the insights we can unlock, data is no longer the constraint, it’s not that the data isn’t accessible; it's that we are not accessible to the data. Instead. Let’s build insight that drives action, let’s build tools that cater to our human experience, what does limit us isn’t the data . . .</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat purus vel nibh cursus ullamcorper. Phasellus porta tempus metus, vitae consequat nisl pellentesque venenatis. Fusce finibus eleifend nibh ut posuere. Sed blandit massa nec facilisis ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in nisl faucibus lorem eleifend tincidunt. Pellentesque ac fermentum erat. Suspendisse tincidunt at felis at efficitur. Suspendisse et leo eget purus mollis elementum. Vivamus ac dictum felis, vel feugiat dolor. Mauris ut orci placerat, interdum tellus nec, tristique elit. Curabitur nulla lectus, malesuada vel luctus id, malesuada condimentum nisl. Sed finibus lorem aliquam augue porta bibendum.

        Vivamus ac tellus ut ex feugiat hendrerit. Aliquam iaculis, lacus at rhoncus ultricies, nunc purus ornare velit, sit amet tempus metus ligula sit amet augue. Nunc non rutrum erat, non finibus libero. Duis eget augue tincidunt, porta odio vel, hendrerit ligula. Donec hendrerit tincidunt pellentesque. Fusce condimentum nulla tortor, nec blandit urna lobortis ut. Nunc aliquet quam eu luctus posuere.</p>
    </Layout> 

)

}

export const query = graphql`
query thoughtList {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                expertise
                author
                short
                hero_alt
                hero_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                }
            }
            id
            slug
            parent {
                ... on File {
                    id
                    name
                    modifiedTime
                }
            }
            body
        }
    }
}
`

export default IndexPage