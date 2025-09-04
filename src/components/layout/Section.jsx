import styled from 'styled-components';
import { sectionPadding } from '../../styles/mixins';

const Section = styled.section`
  ${sectionPadding}
  
  ${({ $bg }) => {
    switch ($bg) {
      case 'dark':
        return `
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
          
          h1, h2, h3, h4, h5, h6 {
            color: ${({ theme }) => theme.colors.white};
          }
          
          p {
            color: ${({ theme }) => theme.colors['gray-300']};
          }
        `;
      case 'light':
        return `
          background-color: ${({ theme }) => theme.colors['gray-100']};
        `;
      default:
        return `
          background-color: ${({ theme }) => theme.colors.white};
        `;
    }
  }}
  
  ${({ $bleed }) => $bleed && `
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding-left: calc(50vw - 50%);
    padding-right: calc(50vw - 50%);
  `}
  
  ${({ $noPadding }) => $noPadding && `
    padding: 0 !important;
  `}
  
  ${({ $as }) => $as === 'div' && `
    display: block;
  `}
`;

export default Section;
