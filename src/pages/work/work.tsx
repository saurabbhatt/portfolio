import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/project-card/project-card';
import { Project } from '../../types/project-types';
import { useThemeToggle } from '../../hooks/use-theme-toggle';

const WorkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const WorkGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'sap-implementation',
    title: '🚀 SAP S/4HANA Implementation',
    subtitle: '💼 Enterprise Solutions',
    image: 'https://picsum.photos/800/800?random=1',
    category: '💼 Enterprise Solutions',
    description: 'End-to-end implementation of SAP S/4HANA'
  },
  {
    id: 'proj-2',
    slug: 'ai-customer-service',
    title: '🤖 AI-Powered Customer Service',
    subtitle: '🧠 AI & ML',
    image: 'https://picsum.photos/800/800?random=2',
    category: '🧠 AI & ML',
    description: 'Implementation of SAP AI Business Services'
  },
  {
    id: 'proj-3',
    slug: 'mobile-app',
    title: '📱 Mobile App Development',
    subtitle: '📲 Mobile Solutions',
    image: 'https://picsum.photos/800/800?random=3',
    category: '📲 Mobile Solutions',
    description: 'SAP Mobile App Development'
  },
  {
    id: 'proj-4',
    slug: 'btp-integration-suite',
    title: '☁️ BTP Integration Suite',
    subtitle: '🔄 Cloud Integration',
    image: 'https://picsum.photos/800/800?random=4',
    category: '🔄 Cloud Integration',
    description: 'SAP BTP and CPI Implementation'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1 
    }
  }
};

const Work: React.FC = () => {
  const { toggleTheme, isDark } = useThemeToggle();

  return (
    <WorkContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <WorkGrid>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </WorkGrid>
      </motion.div>
    </WorkContainer>
  );
}

export default Work;