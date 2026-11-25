import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="bg" aria-hidden="true">
      <div className="aurora">
        <i />
        <i />
      </div>
      <div className="sh" />
      <svg
        className="bg-flow"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="circuitLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0DE59E" stopOpacity=".03" />
            <stop offset=".5" stopColor="#9ecfc0" stopOpacity=".22" />
            <stop offset="1" stopColor="#0DE59E" stopOpacity=".06" />
          </linearGradient>
          <linearGradient id="circuitPulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0DE59E" stopOpacity="0" />
            <stop offset=".5" stopColor="#7CFFD4" stopOpacity=".92" />
            <stop offset="1" stopColor="#0DE59E" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0" stopColor="#0DE59E" stopOpacity=".36" />
            <stop offset="1" stopColor="#0DE59E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="circuit-base">
          <path d="M-100 145 H125 L205 65 H390 L470 145 H655 L735 65 H930 L1010 145 H1300" />
          <path d="M-100 390 H160 L245 305 H430 L510 390 H700 L785 305 H970 L1055 390 H1300" />
          <path d="M-100 650 H120 L220 550 H410 L500 640 H690 L790 540 H970 L1060 630 H1300" />
          <path d="M110 -100 V100 L205 195 V355 L300 450 V610 L395 705 V1000" />
          <path d="M1080 -100 V110 L980 210 V370 L880 470 V630 L780 730 V1000" />
          <path d="M440 -100 V70 L520 150 V270 L600 350 V510 L680 590 V1000" />
        </g>
        <g className="circuit-runners">
          <path d="M-100 145 H125 L205 65 H390 L470 145 H655 L735 65 H930 L1010 145 H1300" />
          <path d="M-100 390 H160 L245 305 H430 L510 390 H700 L785 305 H970 L1055 390 H1300" />
          <path d="M-100 650 H120 L220 550 H410 L500 640 H690 L790 540 H970 L1060 630 H1300" />
          <path d="M110 -100 V100 L205 195 V355 L300 450 V610 L395 705 V1000" />
          <path d="M1080 -100 V110 L980 210 V370 L880 470 V630 L780 730 V1000" />
          <path d="M440 -100 V70 L520 150 V270 L600 350 V510 L680 590 V1000" />
        </g>
        <g className="circuit-nodes">
          <circle cx="125" cy="145" r="5" />
          <circle cx="390" cy="65" r="4" />
          <circle cx="655" cy="145" r="5" />
          <circle cx="930" cy="65" r="4" />
          <circle cx="160" cy="390" r="5" />
          <circle cx="430" cy="305" r="4" />
          <circle cx="700" cy="390" r="5" />
          <circle cx="970" cy="305" r="4" />
          <circle cx="120" cy="650" r="4" />
          <circle cx="410" cy="550" r="5" />
          <circle cx="690" cy="640" r="4" />
          <circle cx="970" cy="540" r="5" />
          <circle cx="205" cy="195" r="4" />
          <circle cx="300" cy="450" r="5" />
          <circle cx="980" cy="210" r="4" />
          <circle cx="880" cy="470" r="5" />
          <circle cx="520" cy="150" r="4" />
          <circle cx="600" cy="350" r="5" />
        </g>
      </svg>
      <i className="pl" style={{ top: '105%', '--t': '13s', '--dl': '0s', '--o': 0.6 } as React.CSSProperties} />
      <i className="pl" style={{ top: '88%', '--t': '17s', '--dl': '4s', '--o': 0.45 } as React.CSSProperties} />
      <i className="pl" style={{ top: '120%', '--t': '15s', '--dl': '8s', '--o': 0.55 } as React.CSSProperties} />
      <i className="pl" style={{ top: '70%', '--t': '19s', '--dl': '11s', '--o': 0.4 } as React.CSSProperties} />
      <i className="pl" style={{ top: '135%', '--t': '12s', '--dl': '2s', '--o': 0.5 } as React.CSSProperties} />
    </div>
  );
};
