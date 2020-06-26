import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import { media } from '../utils/style'


const StyledTypist = styled(Typist)`
  color: #3384A0;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 70px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  position: absolute;
  top: 30%;
  left: 55%;
  ${media.md`
  left: 55%;
  top: 30%;
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
           <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(' ')
              .slice(1)
              .join(' ')}
          </StyledTypist>
        </Typist>
      )
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>I do</strong> BI Analytics
        <Typist.Backspace count={17} delay={800} />
        <strong>I Make</strong> Desktop App
        <Typist.Backspace count={12} delay={600} />
        <span> Industry Soft</span>
        <Typist.Backspace count={14} delay={600} />
        <span> IoT Devices</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={29} delay={600} />
        <span> Sometimes Websites</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={29} delay={100} />
        <strong>But Mostly Just</strong> Cool Innovative Stuff
      </StyledTypist>
    )
  }
}

export default HeroText
