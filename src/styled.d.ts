import 'styled-components';

// Define theme structure explicitly
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      border: string;
      error: string;
      success: string;
      card: {
        background: string;
        hover: string;
      };
      button: {
        primary: {
          background: string;
          text: string;
        };
        secondary: {
          background: string;
          text: string;
        };
      };
      skill: {
        background: string;
        text: string;
        hover: string;
      };
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
    space: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    transitions: {
      default: string;
      slow: string;
      fast: string;
    };
    maxWidth: string;
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
} 