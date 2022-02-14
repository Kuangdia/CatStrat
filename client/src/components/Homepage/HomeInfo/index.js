import React from 'react'
import { Button } from '../ButtonCSS'
import { InfoContainer, VideoBg, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoCSS';

function InfoSection({lightBg, Video, primary, dark, dark2, id, imgStart, topLine, lightText, darkText, Headline, description, buttonLabel, img, alt}) {
  return (
  <>
    <InfoContainer lightBg={lightBg}>
      <InfoWrapper id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{Headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  </>  
  )
}

export default InfoSection;