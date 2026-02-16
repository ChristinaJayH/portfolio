import React, { useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '../components/Modal';
import Resume from '../pages/Resume';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


const sections = [
  { id: 'about', label: 'About', icon: <InfoIcon /> },
  { id: 'projects', label: 'Projects', icon: <WorkIcon /> },
  { id: 'contact', label: 'Contact', icon: <ContactMailIcon /> },
  
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [showResume, setShowResume] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');



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
    <AppBar
      position="fixed"
      elevation={showNav ? 3 : 0}
      sx={{
        backgroundColor: 'white',
        color: 'black',
        backdropFilter: 'blur(8px)',
        display: showNav ? 'flex' : 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Social icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <a href="https://github.com/ChristinaJayH" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: 'black', fontSize: 28 }} />
          </a>
          <a href="mailto:chegginsw@gmail.com">
            <MailOutlineIcon sx={{ color: 'black', fontSize: 28 }} />
          </a>
          <a href="https://www.linkedin.com/in/christina-h-665625114/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: 'black', fontSize: 28 }} />
          </a>
        </Box>

        {/* Desktop navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 6 }}>
            {sections.map(({ id, label, icon }) => (
              <Button
  key={id}
  href={`#${id}`}
  sx={{
    color: currentSection === id ? '#ce4257' : 'black',
    fontWeight: 700,
    textTransform: 'uppercase',
    gap: 1,
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#ce4257',
    },
    '&:visited': {
      color: 'black',
    },
    '&:focus': {
      color: '#ce4257',
    },
  }}
  startIcon={icon}
>
  {label}
</Button>

            ))}

            <Button
              onClick={() => setShowResume(true)}
              startIcon={<ContactPageRoundedIcon />}
              sx={{
                color: 'black',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Resume
            </Button>
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>

    {/* Mobile Drawer */}
<Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
>
  <Box
    sx={{
      width: 260,
      fontFamily: 'Roboto Condensed',
    }}
  >
    <List>
      {sections.map(({ id, label, icon }) => (
        <ListItem key={id} disablePadding>
          <ListItemButton
            component="a"
            href={`#${id}`}
            onClick={() => setDrawerOpen(false)}
            sx={{
              '&:hover': {
                backgroundColor: '#FF7F51',
                color: 'white',
              },
              '&:hover .MuiListItemIcon-root': {
                color: 'white',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'black' }}>
              {icon}
            </ListItemIcon>

            <ListItemText
              primary={label}
              primaryTypographyProps={{
                fontFamily: 'Roboto Condensed',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            setDrawerOpen(false);
            setShowResume(true);
          }}
          sx={{
            '&:hover': {
              backgroundColor: '#FF7F51',
              color: 'white',
            },
            '&:hover .MuiListItemIcon-root': {
              color: 'white',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <ContactPageRoundedIcon />
          </ListItemIcon>

          <ListItemText
            primary="Resume"
            primaryTypographyProps={{
              fontFamily: 'Roboto Condensed',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
</Drawer>



    {showResume && (
      <Modal onClose={() => setShowResume(false)}>
        <Resume />
      </Modal>
    )}
  </>
);

};

export default NavBar;
