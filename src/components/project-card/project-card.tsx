import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Project } from '../../types/project-types'

type ProjectCardProps = {
  project: Project
}

const Card = styled(motion(Link))`
  position: relative;
  background: ${props => props.theme.colors.card.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`

const ProjectSubtitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.accent};
  opacity: 0.9;
`

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, subtitle, image, slug } = project
  
  return (
    <Card to={`/projects/${slug || ''}`}>
      <StyledImage 
        src={image} 
        alt={title}
      />
      <Overlay>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubtitle>{subtitle}</ProjectSubtitle>
      </Overlay>
    </Card>
  )
}

export default ProjectCard
