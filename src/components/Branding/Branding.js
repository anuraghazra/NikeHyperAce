import React from 'react';
import BrandingWrapper from './Branding.style';
import Button from '../UI/Button';

import NikeLogoText from '../../assets/svg/NikeLogoText.svg';
import HexaGroup from '../../assets/svg/hexaGroup.svg';

function Branding() {
  return (
    <BrandingWrapper id="buy">
      <img className="hexa-group" src={HexaGroup} width="30%" />

      <div className="branding__content">
        <img src={NikeLogoText} width="30%" />

        <div>
          <h2>Branding At It’s Finest</h2>
          <div className="branding__inner">
            <div>
              Nike was founded on January 25, 1964, as Blue Ribbon Sports, by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike.
              <br />
              <br />
              <br />
              <div className="branding__circles">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and the Swoosh logo.
              <br />
              <br />
              <br />
              <Button small href="#">Learn More</Button>
            </div>
          </div>
        </div>

      </div>
    </BrandingWrapper>
  )
}

export default Branding;
