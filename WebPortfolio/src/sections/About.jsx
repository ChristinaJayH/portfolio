import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      {/* Title */}
      <div style={titleWrapper}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.6 }}
          
          
        >
          ABOUT
        </motion.h1>

        <motion.div
          style={underlineStyle}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Content Grid */}
      <div style={contentGrid}>
        {/* Left: Text */}
        <motion.div
          style={textColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            I'm a Charlotte-based Web Developer with a passion for building sleek, user-friendly applications that bring ideas to life. My journey into web development started with curiosity and evolved into a career where creativity meets logic.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I enjoy front-end development using React and modern JavaScript, however most of my on-the-job experience was building back-end APIs with Spring Boot and Java.
            I'm experienced deploying & maintaining APIs, communicating with large datasets, version control, and containerization. As a natural problem solver, I bring intensity, intuition, and resilience into every project I touch.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Whether I’m collaborating with clients or working on a side project with my son, I’m always learning, always building, and always ready to solve the next problem.
            When I’m away from my computer I enjoy spending time with family and fitness.
          </p>
        </motion.div>

        {/* Right: Tech Image */}
        <motion.div
          style={imageColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src='/src/assets/tech.png'
            alt="Tech Stack Logos"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

const sectionStyle = {
  backgroundColor: '#fff',
  padding: '5rem 2rem',
  fontFamily: 'Roboto Condensed',
};

const titleWrapper = {
  position: 'relative',
  textAlign: 'center',
  marginBottom: '10rem',
  height: '60px',
};

const titleStyle = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '3.0rem',
  fontWeight: 'bold',
  color: '#000',
  margin: 0,
  letterSpacing: '0.001em',
  zIndex: 2,
  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', 

};

const underlineStyle = {
  position: 'absolute',
  left: '53%',
  transform: 'translateX(-60%)',
  bottom: '5px',
  width: '100px',
  height: '15px',
  backgroundColor: '#ce4257',
  zIndex: 1,
};

const contentGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const textColumn = {
  flex: '1 1 300px',
  fontSize: '1rem',
  color: '#333',
  lineHeight: '1.6',
};

const imageColumn = {
  flex: '0 0 600px',
  display: 'flex',
};

