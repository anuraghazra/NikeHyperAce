import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  input {
    width: 100%;
    border-radius: 100px;
    border: 2px solid ${props => props.theme.secondaryColor};
    padding: 10px;
    padding-left: 55px;
    outline: none;
    font-family: Righteous;
    
  }

  i {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    background: ${props => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
`
function Input({icon, placeholder, type}) {
  return (
    <InputWrapper>
      <i className={"email-icon " + icon}></i>
      <input placeholder={placeholder} type={type} />
    </InputWrapper>
  )
}


export default Input;