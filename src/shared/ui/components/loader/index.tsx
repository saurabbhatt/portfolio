import React from 'react';
import styled, { keyframes } from 'styled-components';

// Simple spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  z-index: 1000;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.accent};
  animation: ${spin} 1s ease-in-out infinite;
`;

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}; 