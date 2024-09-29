import React from 'react';
import logo from '/my.png'; // Ensure the path is correct

const HeroImage: React.FC = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        loading="eager"
        style={{ maxWidth: '100%', height: 'auto' }} // Make it responsive
      />
    </>
  );
};

export default HeroImage;
