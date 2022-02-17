import React, { useState, useEffect } from 'react';

const BpViewer = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <h1>Brake points viewer</h1>
      <h3>{windowWidth}</h3>
      {isMobile && <p>Show this only on mobile</p>}
    </>
  );
}
 
export default BpViewer;