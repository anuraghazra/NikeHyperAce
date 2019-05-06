import styled from 'styled-components';
import { Link } from 'react-scroll';
import media from '../UI/media';

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  max-height: 60px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: ${props => props.theme.primaryText};
  font-family: Righteous;
  font-size: 16px;
  padding: 20px 80px;
  
  background-color: rgba(255,255,255,1);
  box-shadow: 0 5px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  z-index: 1;
  transition: 0.4s;

  .nav__logo {
    height: auto;
    float: left;
    width: 50px;
  }

  .burger {
    display: none; 
    float: right;
    font-size: 24px;
    cursor: pointer;
    color: ${props => props.theme.primaryText};

    &:hover {
      color: ${props => props.theme.secondaryColor};
    }
  }

  @media ${media.tablet} {
    & {
      display: inline-block;
      padding: 20px 40px;
      margin: auto;
      
      .burger {
        display: block;
      }
    }
  }
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  
  @media ${media.tablet} {
    & {
      align-items: flex-start;
      width: 100%;
      text-align: left;
      flex-direction: column;
      margin: 0;
      padding: 0;

      li {
        margin-top: 20px;
      }
      li a {
        margin: 0;
      }
    }
  }
`;

const Item = styled(Link)`
  margin-right: 60px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

export { NavWrapper, NavItems, Item };