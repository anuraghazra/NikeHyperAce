import styled from 'styled-components';
import ContentWrapper from '../UI/ContentWrapper';
import media from '../UI/media';

const BrandingWrapper = styled(ContentWrapper)`
  position: relative;
  
  .branding__content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > img {
      margin-right: 50px;
    }
  }
  
  .branding__inner {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: start;

    > div {
      margin-right: 60px;
    }
  }

  .branding__circles {
    display: flex;
    justify-content: space-around;
    width: 100px;
    
    div {
      width: 15px;
      height: 15px;
      border-radius: 100px;
      background:  ${props => props.theme.gradient};
    }
  }

  .hexa-group {
    position: absolute;
    width: 10%;
    top: 0;
    right: -80px;
  }

  @media ${media.tablet} {
    .branding__content {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: space-around;
      margin: 0;
      padding: 0;


      > img {
        width: 40%;
        margin: 30px auto;
      }
    }
    
    .branding__inner {
      margin: 0;
      padding: 0;
      flex-direction: column;
  
      > div {
        margin: 0;
        margin-top: 30px;
      }
    }
  }

`

export default BrandingWrapper;