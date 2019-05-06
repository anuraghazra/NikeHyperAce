import React from 'react'
import FeatureWrapper from './Feature.style';
import HeaderText from '../UI/HeaderText';
import { Hexagon, HexagonFlex } from '../UI/Hexagon';

import svgFlexible from '../../assets/svg/hexa-flexible.svg'
import svgVariety from '../../assets/svg/hexa-variety.svg'
import svgDurable from '../../assets/svg/hexa-durable.svg'
import Hexas from '../../assets/svg/hexa_group1.svg';

function Feature() {
  return (
    <FeatureWrapper id={"feature"}>
      <img className="hexas" src={Hexas} />

      <HeaderText>Superiorly Luxurious</HeaderText>

      <HexagonFlex>
        <Hexagon svg={svgFlexible} title={'flexible'} />
        <Hexagon svg={svgVariety} title={'variety'} />
        <Hexagon svg={svgDurable} title={'durable'} />
      </HexagonFlex>
    </FeatureWrapper>
  )
}

export default Feature
