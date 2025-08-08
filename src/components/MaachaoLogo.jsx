import React from 'react';

const MaachaoLogo = ({ size = 64, className = '', animated = false }) => {
  return (
    <div 
      className={`maachao-logo ${animated ? 'animated' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: 'url("/images/party-logo.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'all 0.3s ease'
      }}
    />
  );
};

export default MaachaoLogo; 