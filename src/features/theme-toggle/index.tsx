import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../shared/lib/hooks/use-theme';

export type ThemeToggleProps = {
  isDark: boolean;
  toggleTheme: () => void;
  testID?: string;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isDark, 
  toggleTheme,
  testID 
}) => {
  const theme = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={styles.button}
      data-testid={testID}
    >
      <Icon
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        key={isDark ? 'moon' : 'sun'}
        style={styles.icon}
      >
        {isDark ? '🌙' : '☀️'}
      </Icon>
    </ToggleButton>
  );
};

const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  
  &:hover {
    background: ${props => props.theme.colors.card.background};
  }
`;

const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styles = {
  button: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 8
  },
  icon: {
    width: 24,
    height: 24,
    fontSize: 20
  }
}; 