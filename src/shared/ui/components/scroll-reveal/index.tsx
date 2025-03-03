import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }
};

const AnimatedSection = styled(motion.div)`
  width: 100%;
`;

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up',
  delay = 0 
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref in variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <AnimatedSection
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </AnimatedSection>
  );
};

export {}; 