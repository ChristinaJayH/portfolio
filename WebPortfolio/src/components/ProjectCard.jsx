import React from 'react';

const ProjectCard = ({ title, subtitle, description, liveLink, learnMoreLink, image }) => {
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={image} alt={title} style={imageStyle} />
      </div>

      <div style={textBlockStyle}>
        <div style={titleBlockStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <h4 style={subtitleStyle}>{subtitle}</h4>
          <p style={descStyle}>{description}</p>
        </div>
        <div style={linksStyle}>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LIVE APP
          </a>
          <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;




const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '3rem',
  flexWrap: 'wrap',
};

const imageContainerStyle = {
  flex: '0 0 300px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '6px',
  objectFit: 'cover',
};

const textBlockStyle = {
  flex: '1 1 500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const titleBlockStyle = {
  marginBottom: '1rem',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.2rem',
  color: '#000',
};

const subtitleStyle = {
  fontSize: '1.25rem',
  fontWeight: '500',
  marginBottom: '0.8rem',
  color: '#333',
};

const descStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  color: '#444',
};

const linksStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'flex-start',
};

const linkStyle = {
  textDecoration: 'underline',
  textDecorationColor: '#ce4257',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  textUnderlineOffset: '4px',
};
