import React, { Component } from 'react'

import IntroWrapper from './Intro.style'
import Button from '../UI/Button';

import IntroHexas from '../../assets/svg/intro_hexas.svg';

class Intro extends Component {
  render() {
    return (
      <IntroWrapper id={"home"}>
        <img className="intro__hexas" src={IntroHexas} />
        <div className="intro__left">
          <h1>
            Nike,
            <br />
            Hyper Ace 2
          </h1>

          <p>Come run with us and celebrate empowerment</p>
          <Button href="#">Buy</Button>
        </div>

        <div className="intro__right">
          <img className="intro__image" src="./assets/images/nikeHyperAce2.png" />
          <h1 className="intor__subtle-text">RUN AND SUCCESS</h1>
        </div>
      </IntroWrapper>
    )
  }
}


export default Intro;