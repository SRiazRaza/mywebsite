import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
//import Stack from '../components/Stack'
import Header from '../components/Header'
//import AllSocial from '../components/About/AllSocial'
import AboutNew from '../components/About/About'
import { pages } from '../utils'


class About extends React.Component {
  render() {
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    return (
      <Layout location={this.props.location} active={pages.about}>
         <SEO title="About" url={`${siteUrl}/about`} />
         <AboutNew />
        <div className="About">
          <Header
            title="ABOUT"
            description="Hi, I'm Dante Calderón, web developer. I like to build things with Nodejs and I work with React, Redux, Gatsby, Nextjs and the entire React ecosystem."
            color="#3384a0"
          />
           </div>
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
    aboutImage: imageSharp(fluid: { originalName: { regex: "/about-image.jpg/" } }) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

export default About
