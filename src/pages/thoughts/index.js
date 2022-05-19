import * as React from 'react'
import { Link } from 'gatsby'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'


const BlogPage = () => {

    //const image = getImage(data.allMdx.frontmatter.hero_image)
    // const image = getImage('../../../images/icon.png')

    return (

        <Layout pageTitle={'Random Thoughts'}>

            <br/>
            <br/>            

            {/* {
                data.allMdx.nodes.map((node) => (

                    <article key={node.id}>

                        <p>From {node.frontmatter.expertise}</p>

                        <h2>
                            <Link to={`/thoughts/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>

                        <GatsbyImage
                            image={data.allMdx.node.frontmatter.hero_image}
                            alt={node.frontmatter.hero_alt}
                        />
                        
                        <p>{node.frontmatter.author}</p>
                        <p>{node.frontmatter.date}</p>
                        <br/>
                    </article>
                ))
            } */}

        </Layout> 
    )

}

// export const query = graphql`
// query thoughtList {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         nodes {
//             frontmatter {
//                 date(formatString: "MMMM D, YYYY")
//                 title
//                 expertise
//                 author
//                 hero_alt
//                 hero_image {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                 }
//             }
//             id
//             slug
//             parent {
//                 ... on File {
//                     id
//                     name
//                     modifiedTime
//                 }
//             }
//         }
//     }
// }
// `

export default BlogPage