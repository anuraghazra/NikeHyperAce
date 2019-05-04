import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;  
  text-align: center;
  min-width: 50px;
  height: 100%;
  padding: 8px 20px;
  border-radius: 100px;
  background: ${props => props.theme.gradient};
  color: white;
  text-decoration: none;
  transform: scale(1.0);
  transition: 0.1s;
  cursor: pointer;

  font-size: ${props => props.small ? '14px' : 'unset'};

  &:hover {
    transform: scale(1.05) !important;
  }

`;

export default Button;
