import styled from 'styled-components';
import media from '../UI/media';

const IntroWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-column-gap: 50px;
  grid-template-areas: 'introleft introright';
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.primaryText};


  .intro__left {
    grid-area: introleft;
  }
  .intro__right {
    grid-area: introright;
  }

  .intro__image {
    transform: scaleX(-1);
    width: 100%;
  }

  .intor__subtle-text {
    width: fit-content;
    position: absolute;
    display: inline-block;
    left: 55%;
    top: 45%;
    color: ${props => props.theme.secondaryColor};
    opacity: 0.3;
    line-height: auto;
    z-index: -1;
    font-size: 5vw;
  }

  .intro__hexas {
    width: 50%;
    top: 100px;
    right: 0; 
    position: absolute;
    z-index: -1;
  }

  @media ${media.tablet} {
    & {
      margin-top: 70px;
      grid-template-areas:
      'introleft introleft'
      'introright introright';
    }
    .intor__subtle-text {
      left: 0%;
      top: 65%;
      font-size: 55px;
    }
  
    h1 {
      font-size: 10vw;
    }
  }
`;


export default IntroWrapper;