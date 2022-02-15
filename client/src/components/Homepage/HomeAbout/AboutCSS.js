import styled from 'styled-components'

export const AboutContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://t3.ftcdn.net/jpg/04/40/42/74/360_F_440427468_FJfbVBl4K7BsEITyZF7gF1rS1cx3Di9J.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const AboutWrapper = styled.div`
  max-width: 1000px;
  // height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 68px;
  padding: 0 50px;
`

export const AboutCard = styled.div`
  background: #fff;
  border: 2px dotted rgba(102, 135, 105, 0.77);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba (0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 7px 10px 14px rgba(102, 135, 105, 0.77);
  }
`

export const AboutIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-top: 40px;
`

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 34px;
  margin-top: 64px;
  text-shadow: 5px 5px 7px rgb(10, 74, 17);
`

export const AboutH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`

export const AboutP = styled.p`
  font-size: 1rem;
  text-align: center;
`