import React from 'react'
import { AboutContainer, AboutH1, AboutH2, AboutWrapper, AboutCard, AboutIcon, AboutP } from './AboutCSS'; 
import Icon1 from '../../../images/d.png'
import Icon2 from '../../../images/allen.png'
import Icon3 from '../../../images/james.png'

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutH1>Our Team</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon src={Icon1} />
          <AboutH2>Diana Kuang</AboutH2>
          <AboutP>CEO, Founder</AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon2} />
          <AboutH2>Allen Zhao</AboutH2>
          <AboutP>CFO, Co-Founder</AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon3} />
          <AboutH2>James Huang</AboutH2>
          <AboutP>CTO, Co-Founder</AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About;