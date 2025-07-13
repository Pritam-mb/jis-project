import React from 'react';

const SpO2Meter = ({ value = 70 }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div style={{ width: '80px' }}> {/* Optional: control wrapper width */}
      <svg width="80" height="80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="green"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#e63946"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
        <text
          x="40"
          y="45"
          textAnchor="middle"
          fontSize="14"
          fill="#333"
          fontWeight="bold"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default SpO2Meter;
