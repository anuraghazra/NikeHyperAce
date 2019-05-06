import React, { Component } from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { NavWrapper, NavItems, Item } from './Navbar.style';
import Button from '../UI/Button';
import Popup from '../UI/Popup';
import Input from '../UI/Input';

class Navbar extends Component {
  state = {
    isLoginOpen: false,
    isSignupOpen: false,
    isMenuOpen: false
  }

  handleOpenPopup = (e) => {
    this.handleClosePopup();
    this.setState({ [e.target.name]: true })
  }
  handleClosePopup = () => {
    this.setState({
      isLoginOpen: false,
      isSignupOpen: false
    })
  }

  handleOpenMenu = () => {
    this.setState((prev) => {
      return {
        isMenuOpen: !prev.isMenuOpen
      }
    })
  }

  render() {
    return (
      <NavWrapper className={this.state.isMenuOpen ? 'menu-open' : ''}>
        <Popup close={this.handleClosePopup} isOpen={this.state.isLoginOpen}>
          <h3>Login</h3>
          <Input placeholder="username" icon="fas fa-user" />
          <Input placeholder="password" icon="fas fa-key" />
          <Button>Login</Button>
        </Popup>
        <Popup close={this.handleClosePopup} isOpen={this.state.isSignupOpen}>
          <h3>SignUp</h3>
          <Input placeholder="enter username" icon="fas fa-user" />
          <Input placeholder="enter email" type="email" icon="fas fa-envelope" />
          <Input placeholder="enter password" type="password" icon="fas fa-key" />
          <Input placeholder="confirm password" type="password" icon="fas fa-key" />
          <Button>SignUp</Button>
        </Popup>

        <Logo height="auto" className="nav__logo" />
        <i onClick={this.handleOpenMenu} className="fas fa-bars burger"></i>

        <NavItems>
          <li>
            <Item to={"home"}  smooth spy offset={0}>home</Item>
          </li>
          <li>
            <Item to={"feature"} smooth spy offset={-150}>features</Item>
          </li>
          <li>
            <Item to={"ambassadors"} smooth spy offset={-150}>ambassadors</Item>
          </li>
          <li>
            <Item to={"preorder"} smooth spy offset={-150}>preorder</Item>
          </li>
          <li>
            <Item to={""} name="isLoginOpen" onClick={this.handleOpenPopup}>login</Item>
          </li>
          <li><Button name="isSignupOpen" onClick={this.handleOpenPopup}>SignUp</Button></li>
        </NavItems>
      </NavWrapper>
    )
  }
}


export default Navbar;