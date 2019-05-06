import styled from 'styled-components';
import media from './media';

const AppWrapper = styled.section`
  color: ${props => props.theme.primaryText};
  padding: 0 80px;
  overflow: hidden;
  
  @media ${media.tablet} {
    padding: 0 40px;
  }
`;


export default AppWrapper;