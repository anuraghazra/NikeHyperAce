import React from 'react';
import AmbassadorsWrapper from './Ambassadors.style';
import HeaderText from '../UI/HeaderText';

import { Hexagon, HexagonFlex } from '../UI/Hexagon';
import Hexas from '../../assets/svg/hexa_group1.svg';

function Ambassadors() {
  return (
    <AmbassadorsWrapper id={"ambassadors"}>
      <img className="hexas1" src={Hexas} />

      <HeaderText>Brand Ambassadors</HeaderText>

      <HexagonFlex>
        <Hexagon border maskWidth="130%" svg="./assets/images/amb1.jpg" />
        <Hexagon border maskWidth="130%" svg="./assets/images/amb2.jpg" />
        <Hexagon border maskWidth="130%" svg="./assets/images/amb3.jpg" />
      </HexagonFlex>
    </AmbassadorsWrapper>
  )
}

export default Ambassadors;
