import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

const Code = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['7xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}, ${({ theme }) => theme.colors['teal-dark']});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-300']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontBody};
`;

const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.teal};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  border-radius: ${({ theme }) => theme.radius.full};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 2px solid ${({ theme }) => theme.colors.teal};

  &:hover {
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Code>404</Code>
      <Message>Oops! That page doesn’t exist.</Message>
      <StyledLink to="/">Back to Home</StyledLink>
    </Wrapper>
  );
};

export default NotFound;