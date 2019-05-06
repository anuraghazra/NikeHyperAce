import React, { Component } from 'react'
import styled from 'styled-components';
import media from '../UI/media';

const PopupWrapper = styled.div`
  display: block;
  position: fixed;
  width: 40vw;
  left: 50%;
  top: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  border-radius: 15px;
  background-color: white;
  transform:  perspective(1px) translate(-50%,-50%);
  padding: 30px 20px;


  z-index: 2;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .popup__content {
    width: 40%;
  }

  .popup__close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: ${props => props.theme.secondaryColor};

    transition: 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }


  @media ${media.tablet} {
    & {
      width: 80vw;
    }
    
    .popup__content {
      width: 90%;
    }
  }
  
`;


class Popup extends Component {
  render() {
    let toggle = this.props.isOpen ? 'show-popup' : 'hide-popup';

    return (
      <PopupWrapper className={toggle}>
        <i onClick={this.props.close} className="popup__close far fa-times-circle"></i>

        <div className="popup__content">
          {this.props.children}
        </div>
      </PopupWrapper>
    )
  }
}

export default Popup