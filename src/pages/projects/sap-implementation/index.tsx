import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

// Define types for the phases data
interface Activity {
  title: string;
  duration: string;
  activities: string[];
}

const NotebookContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${props => props.theme.colors.card.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const FlowchartContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 4rem 3rem;
  box-shadow: ${props => props.theme.shadows.small};
  margin: 2rem 0;
  overflow-x: auto;
`;

const PhaseStyled = styled(motion.div)`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
  }
`;

const PhaseDetail = styled(motion.div)`
  padding: 2rem;
  margin-top: 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.medium};
  
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }
`;

const phases = [
  {
    title: 'Discovery Phase',
    duration: '2 months',
    activities: [
      'Business process analysis',
      'Requirements gathering',
      'System landscape evaluation',
      'Technical infrastructure assessment'
    ]
  },
  {
    title: 'Design Phase',
    duration: '3 months',
    activities: [
      'Solution design',
      'Technical architecture design',
      'Data migration strategy',
      'Testing strategy'
    ]
  },
  {
    title: 'Build Phase',
    duration: '6 months',
    activities: [
      'System configuration',
      'Custom development',
      'Integration setup',
      'Data migration development',
      'Testing preparation'
    ]
  },
  {
    title: 'Test Phase',
    duration: '3 months',
    activities: [
      'Unit testing',
      'Integration testing',
      'User acceptance testing',
      'Performance testing',
      'Security testing'
    ]
  },
  {
    title: 'Deploy Phase',
    duration: '2 months',
    activities: [
      'Cutover planning',
      'Data migration execution',
      'Go-live activities',
      'Post go-live support',
      'User training'
    ]
  }
];

export const SapImplementation: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<Activity | null>(null);
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.init(undefined, mermaidRef.current);
    }
  }, []);

  return (
    <NotebookContainer>
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
                DS --> B["<div style='padding: 30px 50px'>Build</div>"]:::custom
                B --> T["<div style='padding: 30px 50px'>Test</div>"]:::custom
                T --> DP["<div style='padding: 30px 50px'>Deploy</div>"]:::custom
                classDef custom font-family:Architects Daughter,font-size:28px,fill:#fff,stroke:#2C74B3,stroke-width:2px,rx:10,ry:10
            `}
          </div>
        </FlowchartContainer>
      </Section>

      <Section>
        <h2>Implementation Phases</h2>
        {phases.map((phase) => (
          <PhaseStyled
            key={phase.title}
            onClick={() => setSelectedPhase(phase)}
            whileHover={{ x: 10 }}
          >
            <h3>{phase.title}</h3>
            <p>Duration: {phase.duration}</p>
          </PhaseStyled>
        ))}
      </Section>

      {selectedPhase && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut'
            }}
          >
            <PhaseDetail>
              <h3>{selectedPhase.title}</h3>
              <p>Duration: {selectedPhase.duration}</p>
              <ul>
                {selectedPhase.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </PhaseDetail>
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