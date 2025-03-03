import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const CursorDot = styled.div<{ x: number; y: number; isHovering: boolean }>`
  width: 8px;
  height: 8px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.1s ease;
  transform: translate(${props => props.x}px, ${props => props.y}px);
  opacity: 0.7;
  animation: ${props => props.isHovering ? pulse : 'none'} 1s infinite;
`;

const CursorRing = styled.div<{ x: number; y: number; isHovering: boolean }>`
  width: 24px;
  height: 24px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.15s ease;
  transform: translate(${props => props.x - 8}px, ${props => props.y - 8}px) 
    scale(${props => props.isHovering ? 1.5 : 1});
  opacity: 0.5;
`;

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('[role="button"]') !== null
      );
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateHoverState);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <CursorDot x={position.x} y={position.y} isHovering={isHovering} />
      <CursorRing x={position.x} y={position.y} isHovering={isHovering} />
    </>
  );
};

export {}; 