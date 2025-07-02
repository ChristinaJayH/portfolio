import React from 'react';
import { motion } from 'framer-motion';
import ProjectSlider from './ProjectSlider'; 

const projectsData = [
  {
    title: 'cltfoodie',
    subtitle: 'Local Food App',
    description: 'Full Stack local food application built with React, Node.Js, Vite, SpringBoot, and MySQL.',
    image: '/src/assets/FoodieApp.png',
    liveLink: 'https://yourliveapp.com',
    learnMoreLink: 'https://yourportfolio.com/about',
  },

];

const Projects = () => {
  return (
    <section id="projects" style={sectionStyle}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.6 }}
        style={titleWrapper}
      >
        <h1 style={titleStyle}>PROJECTS</h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.6 }}
          style={underlineStyle}
        />
      </motion.div>

      {}
      <ProjectSlider projects={projectsData} />
    </section>
  );
};

export default Projects;


const sectionStyle = {
  backgroundColor: '#fff',
  padding: '5rem 2rem',
  fontFamily: 'Roboto Condensed',
};

const titleWrapper = {
  position: 'relative',
  textAlign: 'center',
  marginBottom: '6rem',
  height: '60px',
};

const titleStyle = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#000',
  margin: 0,
  letterSpacing: '0.001em',
  zIndex: 2,
  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
};

const underlineStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '5px',
  width: '100px',
  height: '15px',
  backgroundColor: '#ce4257',
  zIndex: 1,
};
