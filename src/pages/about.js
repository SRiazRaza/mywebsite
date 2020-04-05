import React from 'react'
//import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
//import Stack from '../components/Stack'

//import AllSocial from '../components/About/AllSocial'
import AboutNew from '../components/About/ABOUT'
import { pages } from '../utils'


class About extends React.Component {
  render() {
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    return (
      <Layout location={this.props.location} active={pages.about}>
         <SEO title="About" url={`${siteUrl}/about`} />
         <AboutNew />
        
      </Layout>
    )
  }
}

export const queryAbout = graphql`
  query QueryAbout {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

export default About
