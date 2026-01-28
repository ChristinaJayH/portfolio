import React, { useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

import Modal from '../components/Modal';
import Resume from '../pages/Resume';

const sections = [
  { id: 'about', label: 'About', icon: <InfoIcon /> },
  { id: 'projects', label: 'Projects', icon: <WorkIcon /> },
  { id: 'contact', label: 'Contact', icon: <ContactMailIcon /> },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(id);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <nav
        style={{
          fontFamily: 'Roboto Condensed',
          color: '#000',
          fontWeight: 'bold',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          backdropFilter: 'blur(8px)',
          boxShadow: showNav ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease',
          display: showNav ? 'flex' : 'none',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 2rem',
          zIndex: 999,
        }}
      >
        {/* Social icons */}
        <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
          <a href="https://github.com/ChristinaJayH" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#000', fontSize: '1.8rem' }} />
          </a>
          <a href="mailto:chegginsw@gmail.com">
            <MailOutlineIcon style={{ color: '#000', fontSize: '1.8rem' }} />
          </a>
          <a href="https://www.linkedin.com/in/christina-h-665625114/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ color: '#000', fontSize: '1.8rem' }} />
          </a>
        </div>

        {/* Nav links */}
        <ul
          style={{
            display: 'flex',
            gap: '8rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontFamily: 'Roboto Condensed',
            fontWeight: '700',
          }}
        >
          {sections.map(({ id, label, icon }) => (
            <li key={id} style={{ display: 'flex', alignItems: 'center' }}>
              <a
                href={`#${id}`}
                style={{
                  color: currentSection === id ? '#ce4257' : 'black',
                  textDecoration: 'none',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: currentSection === id ? '2px solid #ce4257' : 'none',
                  paddingBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {icon}
                {label}
              </a>
            </li>
          ))}

          {/* Resume button */}
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setShowResume(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Roboto Condensed',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'black',
              }}
            >
              <ContactPageRoundedIcon />
              Resume
            </button>
          </li>
        </ul>
      </nav>

      {showResume && (
        <Modal onClose={() => setShowResume(false)}>
          <Resume />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
