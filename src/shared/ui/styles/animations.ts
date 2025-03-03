import { css } from 'styled-components';

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