import React from 'react';
import styled from 'styled-components';

const HexagonWrapper = styled.div`
 width: fit-content;
 text-align: center;
 font-size: 24px;
 margin-top: 50px;
 
 .hexa, .hexa div {
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  
}
.hexa {
  margin-bottom: 44px;
  width: 260px;
  height: 184px;
}
.hexa div {
  width: 100%;
  height: 100%;
  
}
.hexa {
  transform: rotate(90deg);
}
.hex1 {
  transform: rotate(-60deg);
}
.hex2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: rotate(-60deg);
  background: ${props => props.theme.gradient}
}
.hex2 > * {
  transform: rotate(30deg);
}

.hexa-border {
  position: absolute;
  transform: rotate(90deg) scale(1.07);
}
`

const Hexagon = function ({ svg, title, maskWidth, border }) {
  return (
    <HexagonWrapper className="part">
      {
        border ? 
        <div className="hexa hexa-border">
          <div className="hex1"><div className="hex2"></div></div> 
        </div> : null
      }
      <div className="hexa">
        <div className="hex1">
          <div className="hex2">
            <img src={svg} width={maskWidth ? maskWidth : "40%"} />
          </div>
        </div>
      </div>
      <p>{title}</p>
    </HexagonWrapper>
  )
}

const HexagonFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export {Hexagon, HexagonFlex};