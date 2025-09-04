import styled from 'styled-components';
import { hoverLift, focusRing } from '../../styles/mixins';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  ${({ $interactive }) => $interactive && `
    cursor: pointer;
    ${hoverLift}
    ${focusRing}
  `}
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'elevated':
        return `
          box-shadow: ${({ theme }) => theme.shadows.lg};
          
          &:hover {
            box-shadow: ${({ theme }) => theme.shadows.xl};
          }
        `;
      case 'outlined':
        return `
          box-shadow: none;
          border: 2px solid ${({ theme }) => theme.colors['gray-300']};
          
          &:hover {
            border-color: ${({ theme }) => theme.colors.gold};
          }
        `;
      case 'glass':
        return `
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: ${({ theme }) => theme.shadows.lg};
        `;
      default:
        return '';
    }
  }}
  
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return `padding: ${({ theme }) => theme.spacing.lg};`;
      case 'lg':
        return `padding: ${({ theme }) => theme.spacing['2xl']};`;
      default:
        return '';
    }
  }}
  
  ${({ $bg }) => $bg && `
    background: ${({ theme }) => theme.colors[$bg] || $bg};
  `}
  
  ${({ $borderColor }) => $borderColor && `
    border-color: ${({ theme }) => theme.colors[$borderColor] || $borderColor};
  `}
`;

export default Card;
