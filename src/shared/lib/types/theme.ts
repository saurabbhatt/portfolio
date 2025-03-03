import { DefaultTheme } from 'styled-components';

export interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    card: {
      background: string;
      hover: string;
    };
    skill: {
      background: string;
      text: string;
      hover: string;
    };
  };
  fonts: {
    main: string;
    heading: string;
  };
  transitions: {
    default: string;
    slow: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  maxWidth: string;
} 