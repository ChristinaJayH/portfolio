import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      {/* Title */}
      <div style={titleWrapper}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.6 }}
        >
          CONTACT
        </motion.h1>
        <motion.div
          style={underlineStyle}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Description */}
      <p style={descriptionStyle}>
        Have an question or want to work together? Leave a message and I’ll get back to you.
      </p>

      {/* Form */}
      <form style={formStyle}>
  <input type="text" placeholder="Name" style={inputStyle} required />
  <input type="email" placeholder="Email" style={inputStyle} required />
  <textarea placeholder="Message" rows={5} style={textareaStyle} required />

  <motion.button
    type="submit"
    whileHover={{
      backgroundColor: '#000',
      color: '#fff',
      scale: 1.02,
    }}
    transition={{ duration: 0.3 }}
    style={submitButtonStyle}
  >
    Submit
  </motion.button>
</form>

    </section>
  );
};

export default Contact;
const submitButtonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#fff',
  color: '#000',
  border: '2px solid #000',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  borderRadius: 0,
  alignSelf: 'flex-end',
  transition: 'all 0.3s ease',
};


const sectionStyle = {
  backgroundColor: '#FF7F51',
  padding: '5rem 2rem',
  fontFamily: 'Roboto Condensed',
};

const titleWrapper = {
  position: 'relative',
  textAlign: 'center',
  marginBottom: '1rem',
  height: '100px',
};

const titleStyle = {
  position: 'absolute',
  top: 0,
  left: '45%',
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
  left: '49%',
  transform: 'translateX(-60%)',
  bottom: '45px',
  width: '100px',
  height: '15px',
  backgroundColor: '#ce4257',
  zIndex: 1,
};

const descriptionStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  color: '#000',
  textAlign: 'center',
  fontSize: '1.25rem',
  maxWidth: '600px',
  margin: '0 auto 3rem',
};

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const inputStyle = {
  padding: '1rem',
  fontSize: '1.25rem',
  border: 'none',
  outline: 'none',
  fontFamily: "'JetBrains Mono', monospace",
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: 0,
  boxSizing: 'border-box',
  width: '100%',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '140px',
  resize: 'vertical',
};
