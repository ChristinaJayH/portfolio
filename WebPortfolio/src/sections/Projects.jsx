import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';


const projectsData = [
  {
    title: 'digitalmatrix',
    subtitle: 'School Webpage Content Review  ',
    description: 'Redeveloped a Git Hub Project Using React',
    image: '/src/assets/digital.png',
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

      {/* Project Cards */}
      <div style={cardWrapper}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
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

const cardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  maxWidth: '1200px',
  margin: '0 auto',
};
