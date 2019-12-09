import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import { media } from './styles'

import { pages } from '../utils'



const Container = styled.div`
  min-height: 600px;
  max-width: 1080px;
  display: grid;
  padding-top: 100px;
  margin: 0 auto !important;
  grid-template-columns: minmax(min-content, 590px);
  justify-content: center;
  align-items: center;
  ${media.md`
    height: 100vh;
    min-height: 500px;
    padding-top: 38px;
    grid-template-columns: 1fr 1fr;
  `};
`

const Title = styled.h1`
  font-size: 12vw;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Gentium Book Basic';
  color: #363636;
  margin-bottom: 0;
  ${media.sm`
    font-size: 4.4rem;
  `};
`

const MainInfoWrapper = styled.div`
  // justify-content: center;
  text-align: center;
  padding: 0 5px;
  // width: 70%;
`

const RotationalWrapper = styled.div`
  padding: 0 20px;
`

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 20px 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #1976d2;
`

const About = ({ data }) => (
  <div
    style={{
      background: '#f3f3f3',
      backgroundImage: `url(${grain_image})`
    }}
  >
    <Container wrap="wrap" maxWidth="1100px" className="row" justifyContent="center">
      <MainInfoWrapper>
        <Title>{data.site.siteMetadata.title}</Title>
        <Subtitle>{data.site.siteMetadata.subtitle}</Subtitle>
       
       
      </MainInfoWrapper>

      

    </Container>
  </div>
)

export default props => (
  <StaticQuery
  query={graphql`
  query{

    aboutImage: imageSharp(fluid: { originalName: { regex: "/about-image.jpg/" } }) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`}
render={data => <about data={data} {...props} />}

/>
)