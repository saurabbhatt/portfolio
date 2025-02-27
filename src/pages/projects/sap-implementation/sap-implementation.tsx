import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import mermaid from 'mermaid';

// Initialize mermaid config
mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    fontFamily: 'Architects Daughter',
    fontSize: '24px',
    nodeTextColor: '#2C74B3',
    mainBkg: '#ffffff',
    nodeBorder: '#2C74B3',
    lineColor: '#2C74B3',
  }
});

const NotebookContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #fcfcfc;
  background-image: 
    radial-gradient(circle, #e0e0e0 1px, transparent 1px);
  background-size: 20px 20px;
  position: relative;
  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ff9999;
    border-radius: 2px;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.02), transparent);
  }
`;

const ProjectTitle = styled.h1`
  font-family: 'Architects Daughter', cursive;
  font-size: 2.8rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  padding-left: 60px;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    padding-left: 40px;
  }

  &::after {
    content: '📝';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    opacity: 0.7;
  }
`;

const Section = styled(motion.section)`
  margin: 3rem 0;
  padding-left: 60px;
  position: relative;

  h2 {
    font-family: 'Architects Daughter', cursive;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1.5rem;
    
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: ${props => props.theme.colors.accent};
      opacity: 0.3;
      margin-top: 4px;
    }
  }
`;

const FlowchartContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 4rem 3rem;
  margin: 2rem 0;
  box-shadow: ${props => props.theme.shadows.small};
  overflow: hidden;
  display: flex;
  justify-content: center;
  min-height: 250px;
  width: 100%;

  .mermaid {
    width: 100%;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Phase = styled(motion.div)`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-left: 3px solid ${props => props.theme.colors.accent};
  background: rgba(255,255,255,0.9);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    
    li {
      margin: 0.5rem 0;
      color: ${props => props.theme.colors.text};
      opacity: 0.9;
    }
  }
`;

const DetailPopup = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 90%;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
    max-height: 80vh;
    overflow-y: auto;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 999;
`;

const FlowchartSection = styled(Section)`
  .flowchart-container {
    background: white;
    border-radius: 12px;
    padding: 3rem 1rem;
    margin: 2rem 0;
    box-shadow: ${props => props.theme.shadows.small};
    position: relative;
    width: 100%;
    min-height: 250px;
    overflow: hidden;
    
    @media (max-width: 768px) {
      padding: 1.5rem 0.5rem;
      min-height: 500px;
    }
    
    // Center the flowchart
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PathView = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
`;

const PathNode = styled.span`
  font-family: 'Architects Daughter', cursive;
  color: ${props => props.theme.colors.primary};
`;

interface Phase {
  title: string;
  duration: string;
  activities: string[];
}

const Proj1: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  const phases: Phase[] = [
    {
      title: "Discovery & Planning",
      duration: "3 months",
      activities: [
        "Business process analysis",
        "System landscape evaluation",
        "Project team formation",
        "Timeline and milestone definition"
      ]
    },
    {
      title: "Design & Configuration",
      duration: "6 months",
      activities: [
        "System architecture design",
        "Core module configuration",
        "Integration planning",
        "Custom development scoping"
      ]
    },
    {
      title: "Development & Testing",
      duration: "8 months",
      activities: [
        "ABAP development",
        "Interface implementation",
        "Unit testing",
        "Integration testing"
      ]
    },
    {
      title: "Data Migration & Validation",
      duration: "4 months",
      activities: [
        "Legacy data analysis",
        "Migration strategy execution",
        "Data cleansing",
        "Validation and reconciliation"
      ]
    }
  ];

  const handleRefresh = () => {
    mermaid.contentLoaded();
    setSelectedPhase(null);
  };

  return (
    <NotebookContainer>
      <ProjectTitle>🚀 Southwest Gas S/4HANA Implementation</ProjectTitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Project Overview</h2>
        <p>End-to-end implementation of SAP S/4HANA for Southwest Gas, 
           transforming their legacy systems into a modern, integrated solution.</p>
      </Section>

      <Section>
        <h2>Implementation Flow</h2>
        <FlowchartContainer>
          <div className="mermaid" ref={mermaidRef}>
            {`
              graph LR
                D["<div style='padding: 30px 50px'>Discovery</div>"]:::custom --> DS["<div style='padding: 30px 50px'>Design</div>"]:::custom
                DS --> I["<div style='padding: 30px 50px'>Implementation</div>"]:::custom
                I --> T["<div style='padding: 30px 50px'>Testing</div>"]:::custom
                
                classDef custom font-family:Architects Daughter,font-size:28px,fill:#fff,stroke:#2C74B3,stroke-width:2px,rx:10,ry:10
            `}
          </div>
        </FlowchartContainer>
      </Section>

      <Section>
        <h2>Implementation Phases</h2>
        {phases.map((phase, index) => (
          <Phase
            key={phase.title}
            onClick={() => setSelectedPhase(phase)}
            whileHover={{ x: 10 }}
          >
            <h3>{phase.title}</h3>
            <p>Duration: {phase.duration}</p>
          </Phase>
        ))}
      </Section>

      {selectedPhase && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhase(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 999
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              maxWidth: '500px',
              width: '90%',
              zIndex: 1000
            }}
          >
            <h3>{selectedPhase.title}</h3>
            <p>Duration: {selectedPhase.duration}</p>
            <ul>
              {selectedPhase.activities.map(activity => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </motion.div>
        </>
      )}

      <Section>
        <h2>Key Achievements</h2>
        <ul>
          <li>Successfully migrated legacy system to S/4HANA</li>
          <li>Implemented real-time billing and revenue management</li>
          <li>Integrated customer service operations</li>
          <li>Automated meter-to-cash process</li>
          <li>Enhanced reporting capabilities</li>
        </ul>
      </Section>
    </NotebookContainer>
  );
};

export default Proj1; 