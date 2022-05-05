
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (

    <Layout pageTitle={'Data Savvy for Data Driven Decision Making'}>

      <br></br>
      <br></br>

      <StaticImage
        alt="Data Savvy for Data Driven Decision Making."
        src="../images/icon.png"
      />
    </Layout> 

)

}

export default IndexPage