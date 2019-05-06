import styled from 'styled-components';
import ContentWrapper from '../UI/ContentWrapper';
import media from '../UI/media';


const FooterWrapper = styled(ContentWrapper)`
  font-family: Righteous !important;
  margin-bottom: 50px;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #FF6320;
  }

  .footer__preorder {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 100px;

    h2 {
      text-align: center;
      font-size: 36px;
    }

    .preorder-email {
      margin-top: 25px;
      border-radius: 100px;
      border: 2px solid ${props => props.theme.secondaryColor};
      padding: 10px;
      padding-left: 55px;
      outline: none;
      font-family: Righteous;
    }
    .email-icon {
      position: absolute;
      left: 20px;
      top: 50%;
      font-size: 24px;
      background: ${props => props.theme.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .footer__container {
    display: flex;

    > div {
      flex: 1;
    }
  }
  .footer__content {
    display: flex;

    > div {
      margin-right: 15%;
    }
  }
  .footer__headertext {
    background: ${props => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }

  .footer__text {
    line-height: 40px;
    font-family: Righteous !important;
    color: #4F4F4F;
  }

  .footer__icons {
    font-size: 24px;
    display: flex;
    max-width: 120px;
    align-items: flex-end;
    
    i {
      flex: 1;
      background: ${props => props.theme.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  }


  .footer_illustration {
    position: absolute;
    width: 8%;
    top: -300px;
    left: -80px;
  }
  .footer_shoe {
    position: absolute;
    width: 8%;
    right: -80px;
  }

  @media ${media.tablet} {
    .footer__icons {
      display: none;
    }
  }
`


export default FooterWrapper;