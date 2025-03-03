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
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 3px;
    background: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`;

const Content = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.9;
  }
`;

const SkillSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
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
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform ${props => props.theme.transitions.default};

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const LanguageSection = styled.div`
  margin-top: 1.5rem;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
  }
`;

const LanguageTag = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
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
        <Title>About Me</Title>

        <ProfileSection>
          <div style={{ position: 'relative' }}>
            <ProfileImage 
              src="https://picsum.photos/800/800?random=5" 
              alt="Saurabh Bhatnagar"
              whileHover={{ scale: 1.05 }}
              onClick={handleImageClick}
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
            <Content>
              <p>
                As a passionate SAP developer with over 10 years of experience, I specialize in 
                delivering enterprise solutions that transform business operations. My expertise 
                spans ABAP on S/4 HANA, SAP-BTP, and AI Business Services.
              </p>
            </Content>
            
            <LanguageSection>
              <h3>Languages</h3>
              <ul>
                {languages.map(lang => (
                  <LanguageTag key={lang.name}>
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
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
              'SAP Build Apps'
            ].map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </ul>
        </SkillSection>

        <SkillSection>
          <h2>Development Skills</h2>
          <ul>
            {[
              'JavaScript',
              'NodeJS',
              'React',
              'UI/UX Design',
              'Web Services',
              'GitHub'
            ].map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </ul>
        </SkillSection>

        <Content>
          <p>
            My experience in S/4 Hana implementation, combined with functional knowledge 
            in SAP-FICA and ISU-Utilities, allows me to provide end-to-end solutions that meet 
            complex business requirements. I approach each project with a visionary perspective, 
            always seeking innovative ways to solve problems.
          </p>
          
          <p>
            I believe that the best solutions come from understanding both technical capabilities 
            and business needs. My goal is to create systems that not only work efficiently but 
            also enhance the user experience and deliver measurable business value.
          </p>
        </Content>
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