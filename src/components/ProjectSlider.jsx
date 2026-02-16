import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={sliderWrapper}>
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        style={{ ...arrowStyle, left: 0 }}
      >
        &#8678;
      </button>

      <div style={cardContainer}>
        <ProjectCard {...projects[currentIndex]} />
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex === projects.length - 1}
        style={{ ...arrowStyle, right: 0 }}
      >
        &#8680;
      </button>
    </div>
  );
};

export default ProjectSlider;

const sliderWrapper = {
  position: 'relative', 
  width: '100%',
  maxWidth: '1300px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


const cardContainer = {
  flex: '1',
  padding: '0 3rem',
  display: 'flex',
  justifyContent: 'center',
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'white',
  border: '2px solid #ce4257',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '1.5rem',
  cursor: 'pointer',
  zIndex: 10,
  color: '#ce4257',
  fontWeight: 'bold',
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
};
