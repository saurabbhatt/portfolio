import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Props for the loader container with exit animation support
interface LoaderContainerProps {
  isExiting: boolean;
}

// Animation for the rotating border around the loader
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Full-screen container for the loader
const LoaderContainer = styled.div<LoaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  z-index: 1000;
  opacity: ${props => props.isExiting ? 0 : 1};
  transition: opacity 0.5s ease;
`;

// Circular container with animated border
const LoaderCircle = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: ${props => props.theme.colors.accent};
    border-right-color: ${props => props.theme.colors.accent};
    animation: ${rotate} 2s linear infinite;
  }
`;

// Container for the GIF with circular mask
const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

// The actual loader GIF image
const LoaderImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
  border-radius: 50%;
`;

// Backup GIF URL in case the local image fails to load
const FALLBACK_GIF = 'https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif';

export const Loader: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/electrivire.gif');

  // Handle cleanup when component unmounts
  useEffect(() => {
    return () => {
      setIsExiting(true);
    };
  }, []);

  // Handle image loading errors by switching to fallback
  const handleImageError = () => {
    console.error("Image failed to load, using fallback");
    setImgSrc(FALLBACK_GIF);
  };

  return (
    <LoaderContainer isExiting={isExiting}>
      <LoaderCircle>
        <ImageContainer>
          <LoaderImage 
            src={imgSrc}
            alt="Loading..."
            onError={handleImageError}
          />
        </ImageContainer>
      </LoaderCircle>
    </LoaderContainer>
  );
}; 