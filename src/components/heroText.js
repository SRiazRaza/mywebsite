import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import { media } from '../styles'

const StyledTypist = styled.div`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  position: absolute;
  top: 50%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
`}
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(' ')
              .slice(1)
              .join(' ')}
          
        </Typist>
      )
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>I Make</strong> Websites
        <Typist.Backspace count={9} delay={300} />
        <span> Web Apps</span>
        <Typist.Backspace count={9} delay={300} />
        <span> Video Games</span>
        <Typist.Backspace count={12} delay={300} />
        <span> Poor Life Decisions</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={29} delay={10} />
        <strong>But Mostly Just</strong> Cool Web Stuff
      </StyledTypist>
    )
  }
}

export default HeroText
