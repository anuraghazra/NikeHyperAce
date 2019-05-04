import styled from 'styled-components';

const HeaderText = styled.h1`
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 36px;

  
  display: block;
  position: relative;
  width: fit-content;
  text-align: center;
  margin: 100px auto;

  &:after {
    position: absolute;
    content: ' ';
    top: 50%;
    left: 100%;
    margin: 0 10px;
    width: 150px;
    height: 5px;
    background: ${props => props.theme.gradient};
  }

  &:before {
    position: absolute;
    content: ' ';
    top: 50%;
    right: 100%;
    margin: 0 10px;
    width: 150px;
    height: 5px;
    background: ${props => props.theme.gradient};
  }
`;

export default HeaderText;
