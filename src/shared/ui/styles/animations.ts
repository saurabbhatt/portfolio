import { css, keyframes } from 'styled-components';

/**
 * Common animation keyframes for use across the application
 */

// Fade in animation
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Slide up animation
export const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide in from right animation
export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Pulse animation for attention-grabbing elements
export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Rotation animation
export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

/**
 * Animation durations (in ms)
 */
export const durations = {
  fast: 300,
  default: 500,
  slow: 800
};

/**
 * Animation timing functions
 */
export const easings = {
  default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
};

export const hoverScale = css`
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const hoverLift = css`
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const hoverGlow = css`
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 15px ${props => props.theme.colors.accent}40;
  }
`;

export {}; 