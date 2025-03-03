import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => (
  <FooterContainer>
    <FooterContent>
      <span>© {new Date().getFullYear()} Saurabh Bhatnagar</span>
      <span>•</span>
      <span>All Rights Reserved</span>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: transparent;
  position: relative;
  margin-top: auto;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  letter-spacing: 0.02em;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`; 