import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="bg-canvas" aria-hidden="true">
      <div className="bg-stripes" />
      <div className="bg-dot-left" />
      <div className="bg-dot-right" />
      <svg
        className="bg-svg"
        viewBox="0 0 1672 941"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M808 626L860 590 956 557" />
        <path d="M819 513L870 480 956 440 1100 360 1250 280 1395 252" />
        <path d="M997 727L1100 700 1200 650 1380 560" />
        <path d="M1672 150L1606 216 1530 190 1480 177 1383 215" />
        <path d="M1672 820L1560 840 1380 850" />
        <circle cx="808" cy="626" r="7" />
        <circle cx="819" cy="513" r="7" />
        <circle cx="956" cy="440" r="7" />
        <circle cx="956" cy="557" r="7" />
        <circle cx="997" cy="727" r="7" />
        <circle cx="1395" cy="252" r="7" />
        <circle cx="1606" cy="216" r="7" />
        <circle cx="1480" cy="177" r="6" />
      </svg>
    </div>
  );
};
