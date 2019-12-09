import { graphql } from 'gatsby'
import React from 'react'
import Headera from '../components/Home/HeaderHome'
import About from '../components/About/About'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { pages } from '../utils'

class Index extends React.Component {
  render() {
    const { siteUrl } = this.props.data.site.siteMetadata
    return (
     <Layout location={this.props.location} active={pages.home}>
        <SEO title="" url={siteUrl} />
        <Headera />
        <div
          style={{
            background: '#22292c',
            height: '200px'
          }}
        />
       <About />
      </Layout>
    )
  }
}

export const queryBlog = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Index
