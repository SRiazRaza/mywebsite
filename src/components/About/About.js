import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'
import HeroText from '../heroText'
import Header from '../Header'
import grain_image from '../../assets/images/grain.png'

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

const ABOUT = ({ data }) => (
 <div
 style={{
  background: '#f3f3f3',
  backgroundImage: `url(${grain_image})`
 
}}>
    <Container wrap="wrap" maxWidth="1100px" className="row" justifyContent="center">
      <Header 
            title="ABOUT"
            description={data.site.siteMetadata.description}
            color="#3384a0"
          />
          <div>
       <HeroText />
       </div>
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
