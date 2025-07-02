import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import DotBackground from '../components/DotBackground'; 

const HeroText = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',  // add this for layering
        backgroundColor: '#720026',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',  // prevent scroll from expanding section with dots
      }}
    >
      {/* Dot Background behind the content */}
      <DotBackground />

      {/* Main hero content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          style={{
            color: 'white',
            fontFamily: 'Roboto Condensed',
            fontWeight: 800,
            fontSize: '3.5rem',
            marginBottom: '1rem',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', 
          }}
        >
          HELLO, I'M{' '}
          <span style={{ color: '#ce4257' }}>CHRISTINA</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          style={{
            color: 'white',
            fontFamily: 'JetBrains Mono',
            fontWeight: 400,
            fontSize: '1.25rem',
            marginBottom: '3rem',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', 
          }}
        >
          Full Stack Web Developer | React, Java & Spring Boot
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            style={{
              color: '#ce4257',
              borderColor: '#ce4257',
              fontWeight: 'bold',
              fontFamily: 'JetBrains Mono',
              textTransform: 'none',
              fontSize: '1rem',
              padding: '0.6rem 1.5rem',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', 
            }}
            href="#about"
          >
            View My Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroText;
