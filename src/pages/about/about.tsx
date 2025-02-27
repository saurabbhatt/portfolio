import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, type HTMLMotionProps } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

type Language = {
  name: string;
  level: string;
  flag: string;
};

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`;

const Content = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const SkillSection = styled.div`
  margin-top: 2rem;
  
  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
`;

const SkillTag = styled.li`
  background: ${props => props.theme.colors.skill.background};
  color: ${props => props.theme.colors.skill.text};
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all ${props => props.theme.transitions.default};
  box-shadow: ${props => props.theme.shadows.small};

  &:hover {
    background: ${props => props.theme.colors.skill.hover};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const QRContainer = styled(motion.div)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.large};
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const EasterEggTitle = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  white-space: nowrap;
  color: ${props => props.theme.colors.accent};
  opacity: 0.8;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform ${props => props.theme.transitions.default};
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const LanguageSection = styled(SkillSection)`
  margin-top: 1rem;
`;

const LanguageTag = styled(SkillTag)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.accent};
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const EasterEggHint = styled(motion.div)`
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
  white-space: nowrap;
  color: ${props => props.theme.colors.accent};
  opacity: 0.8;
  pointer-events: none;
`;

const About: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showQR, setShowQR] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleImageClick = useCallback(() => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 1) {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 2000);
      }
      if (newCount === 5) {
        setShowQR(true);
        setShowHint(false);
        return 0;
      }
      return newCount;
    });
  }, []);

  const languages: Language[] = [
    { name: 'English', level: 'Professional', flag: '🇬🇧' },
    { name: 'Hindi', level: 'Native', flag: '🇮🇳' },
    { name: 'German', level: 'Basic', flag: '🇩🇪' }
  ];

  const handleRefresh = () => {
    // Add any refresh logic here
    setShowQR(false);
    setClickCount(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContainer>
        <Title>👨‍ About Me</Title>

        <ProfileSection>
          <div style={{ position: 'relative' }}>
            <ProfileImage 
              src="/images/profile.jpg" 
              alt="Saurabh Bhatnagar"
              loading="lazy"
              onClick={handleImageClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
            {showHint && clickCount > 0 && clickCount < 5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <EasterEggHint>
                  {`${5 - clickCount} more clicks for a surprise! 🎁`}
                </EasterEggHint>
              </motion.div>
            )}
          </div>
          <ProfileInfo>
            <p>
              As a passionate SAP developer with a wealth of experience, I possess a diverse skill set 
              that enables me to deliver exceptional results. My expertise includes ABAP on S/4 HANA, 
              SAP-BTP, SAP AI Business Services, SAP CPI, SAP CAP, SAP Build Apps, SAP Sales and 
              Service Cloud, and SAP Mobile App Development.
            </p>
            <LanguageSection>
              <h2>Languages</h2>
              <ul>
                {languages.map(lang => (
                  <LanguageTag key={lang.name}>
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                    <span style={{ opacity: 0.7 }}>• {lang.level}</span>
                  </LanguageTag>
                ))}
              </ul>
            </LanguageSection>
          </ProfileInfo>
        </ProfileSection>

        <SkillSection>
          <h2>Technical Expertise</h2>
          <ul>
            {[
              'ABAP on S/4 HANA',
              'SAP BTP',
              'SAP AI Business Services',
              'SAP CPI',
              'SAP CAP',
              'SAP Build Apps',
              'Sales & Service Cloud',
              'Mobile Development'
            ].map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </ul>
        </SkillSection>

        <SkillSection>
          <h2>Tech Arsenal</h2>
          <ul>
            {[
              'JavaScript',
              'NodeJS',
              'React Native',
              'ABAP',
              'CAP',
              'Github',
              'Web Services',
              'Groovy Scripts',
              'UI/UX Design'
            ].map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </ul>
        </SkillSection>

        <SkillSection>
          <h2>AI Expertise</h2>
          <ul>
            {[
              'Hana Vector Engine',
              'SAP Joule',
              'RAG',
              'Langchain'
            ].map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </ul>
        </SkillSection>

        <p>
          My experience in S/4 Hana E2E implementation, combined with my functional knowledge 
          in SAP-FICA and ISU-Utilities, allows me to provide end-to-end solutions that meet 
          complex business requirements. I approach each project with a visionary perspective, 
          always seeking new ways to push the boundaries of what is possible.
        </p>

        <p>
          I am committed to delivering exceptional customer experiences through a holistic 
          approach that encompasses both technical and functional expertise. My attention to 
          detail, strong analytical skills, and ability to collaborate with cross-functional 
          teams enable me to exceed expectations and achieve business objectives.
        </p>

        <p>
          In today's fast-paced world, I believe that innovation and agility are key to 
          success, and I am always eager to explore new technologies and techniques that can 
          deliver superior results. If you are looking for a dynamic and visionary Full Stack 
          developer with a track record of success, then look no further. Let's collaborate 
          to unlock new possibilities and drive your business forward.
        </p>
      </AboutContainer>

      {showQR && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
        >
          <QRContainer onClick={() => window.open('https://www.linkedin.com/in/s100rabh/', '_blank')}>
            <EasterEggTitle>
              🎉 You found my secret LinkedIn!
            </EasterEggTitle>
            <QRCodeSVG
              value="https://www.linkedin.com/in/s100rabh/"
              size={128}
              level="H"
              includeMargin={true}
              fgColor="#0A2647"
              bgColor="#ffffff"
            />
          </QRContainer>
        </motion.div>
      )}
    </motion.div>
  );
};

export default About; 