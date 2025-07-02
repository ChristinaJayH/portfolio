import React from 'react';
import { motion } from 'framer-motion';

const DotBackground = () => {
  const dotSize = 14;
  const horizontalSpacing = dotSize * 3;
  const verticalSpacing = dotSize * 3;
  const totalRows = Math.ceil(window.innerHeight / verticalSpacing) + 4;
  const maxDotsPerRow = Math.ceil(window.innerWidth / horizontalSpacing) + 4;

  const dotsPerRow = Array.from({ length: totalRows }, (_, i) => {
    const distFromMid = Math.abs(Math.floor(totalRows / 2) - i);
    const dotsCount = maxDotsPerRow - distFromMid * 2;
    return dotsCount > 0 ? dotsCount : 1;
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pointerEvents: 'none', 
        overflow: 'hidden',
        opacity: 0.07,
        zIndex: 0,
      }}
    >
      {dotsPerRow.map((dotsCount, rowIndex) => {
        const isOddRow = rowIndex % 2 === 1;
        const offset = isOddRow ? horizontalSpacing / 2 : 0;

        return (
          <div
            key={rowIndex}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: verticalSpacing,
              marginLeft: offset,
            }}
          >
            {Array.from({ length: dotsCount }).map((_, dotIndex) => (
              <motion.div
                key={dotIndex}
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: '50%',
                  backgroundColor: '#FF9B54',
                  marginRight: dotIndex === dotsCount - 1 ? 0 : horizontalSpacing,
                  flexShrink: 0,
                  pointerEvents: 'auto', 
                  cursor: 'pointer',
                }}
                whileHover={{
                  scale: 1.5,
                  backgroundColor: '#ffb677',
                  boxShadow: '0 0 8px #ffb677',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DotBackground;
