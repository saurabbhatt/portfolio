import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../navigation';
import { Footer } from '../footer';

export type LayoutProps = {
  children: React.ReactNode;
  toggleTheme: () => void;
  isDark: boolean;
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, isDark }) => (
  <LayoutContainer>
    <Navigation toggleTheme={toggleTheme} isDark={isDark} />
    <MainContent>
      <ContentWrapper>{children}</ContentWrapper>
    </MainContent>
    <Footer />
  </LayoutContainer>
); 