import styled from 'styled-components';
import ContentWrapper from '../UI/ContentWrapper';

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

`

export default BrandingWrapper;