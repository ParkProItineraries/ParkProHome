import styled from 'styled-components';
import { container } from '../../styles/mixins';

const Container = styled.div`
  ${container}
  
  ${({ fluid }) => fluid && `
    max-width: none !important;
  `}
  
  ${({ narrow }) => narrow && `
    max-width: ${({ theme }) => theme.containerWidths.lg} !important;
  `}
  
  ${({ wide }) => wide && `
    max-width: ${({ theme }) => theme.containerWidths['2xl']} !important;
  `}
`;

export default Container;
