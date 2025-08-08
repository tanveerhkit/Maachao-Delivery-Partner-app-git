import React from 'react';

const Favicon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#F7C600"
        stroke="white"
        strokeWidth="2"
      />
      
      {/* Eyes/OO letters */}
      <g>
        {/* Left eye */}
        <path
          d="M 25 35 Q 25 30 30 30 Q 35 30 35 35 Q 35 40 30 40 Q 25 40 25 35"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Right eye */}
        <path
          d="M 60 35 Q 60 30 65 30 Q 70 30 70 35 Q 70 40 65 40 Q 60 40 60 35"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Party Hat */}
      <g>
        {/* Hat base */}
        <path
          d="M 20 25 L 35 15 L 50 25 L 35 35 Z"
          fill="#FF6B6B"
          stroke="white"
          strokeWidth="1"
        />
        
        {/* Bow */}
        <circle cx="35" cy="15" r="2" fill="white" />
        <circle cx="37" cy="15" r="2" fill="white" />
      </g>

      {/* Mouth */}
      <path
        d="M 30 60 Q 50 70 70 60"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Tongue */}
      <path
        d="M 35 60 Q 30 65 25 70 Q 30 75 35 70 Q 40 65 35 60"
        fill="#FF6B6B"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Favicon; 