import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'
import grain_image from '../../assets/images/grain.png'
import { media } from '../../styles'

import Social from '../Social'
import HeroText from '../components/heroText'
import Header from '../components/Header'

const ButtonAbout = styled(AwesomeButton)`
  width: 141px !important;
  margin-top: 34px !important;
`

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

const HeroTextWrapper = styled.div`
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

const HeaderHome = ({ data }) => (
  <div
    style={{
      background: '#f3f3f3',
      backgroundImage: `url(${grain_image})`
    }}
  >
    <Container wrap="wrap" maxWidth="1100px" className="row" justifyContent="center">
      
      <MainInfoWrapper>
      <Header
            title="ABOUT"
            description="Hi, I'm Dante Calderón, web developer. I like to build things with Nodejs and I work with React, Redux, Gatsby, Nextjs and the entire React ecosystem."
            color="#3384a0"
          />
      </MainInfoWrapper>

      <HeroTextWrapper className="col-xs-12 col-lg-7">
       <HeroText />
      </HeroTextWrapper>

    </Container>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
          sizes(maxWidth: 360) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
        site {
          siteMetadata {
            title
            siteUrl
            subtitle
          }
        }
      }
    `}
    render={data => <HeaderHome data={data} {...props} />}
  />
)
