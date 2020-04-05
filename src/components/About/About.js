import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import styled from 'styled-components'
//import grain_image from '../../assets/images/grain.png'
import { media } from '../../styles'
import HeroText from '../heroText'
import Header from '../Header'


const Container = styled.div`
  min-height: 600px;
  max-width: 1080px;
  display: grid;
  padding-top: 80px;
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


const MainInfoWrapper = styled.div`
  // justify-content: center;
  text-align: center;
  padding: 0 5px;
  // width: 70%;
`

const HeroTextWrapper = styled.div`
  padding: 0 20px;
  background: blue;
`


const ABOUT = ({ data }) => (
 <div
 style={{
  background: '#ffffff'
 
}}>
    <Container wrap="wrap" maxWidth="1100px" className="row" justifyContent="center">
      
      <MainInfoWrapper>
      <Header
            title="ABOUT"
            description={data.site.siteMetadata.description}
            color="#3384a0"
          />
      </MainInfoWrapper>

      <HeroTextWrapper className="col-xs-12 col-lg-7" >
       <HeroText />
      </HeroTextWrapper>

    </Container>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
      
            description
            siteUrl
       
          }
        }
      }
    `}
    render={data => <ABOUT data={data} {...props} />}
  />
)
