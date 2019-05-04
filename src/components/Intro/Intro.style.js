import styled from 'styled-components';

const IntroWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-column-gap: 50px;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.primaryText};

  .intro__left {
    grid-column: 1 / 2;
  }
  .intro__right {
    grid-column: 2 / 2;
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
    font-size: 60px;
  }

  .intro__hexas {
    width: 50%;
    top: 100px;
    right: 0; 
    position: absolute;
  }
`;


export default IntroWrapper;