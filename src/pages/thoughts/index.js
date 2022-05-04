import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={'Random Thoughts'}>    

            {
                data.allMdx.nodes.map((node) => (

                    <article key={node.id}>

                        <h2>
                            <Link to={`/thoughts/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        
                        <p>Posted: {node.frontmatter.date}</p>

                    </article>
                ))
            }

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
            }
        }
    }
`

export default BlogPage