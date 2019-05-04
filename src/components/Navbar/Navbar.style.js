import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  color: ${props => props.theme.primaryText};
  font-family: Righteous;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 20px 80px;
  width: calc(100% - 160px);
  top: 0;
  left: 0px;
  z-index: 1;
  background-color: rgba(255,255,255,1);
  box-shadow: 0 5px 30px rgba(0,0,0,0.1);

  .nav__logo {
    height: auto;
    width: 50px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const Item = styled(Link)`
  margin-right: 60px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;



export { NavWrapper, NavItems, Item };