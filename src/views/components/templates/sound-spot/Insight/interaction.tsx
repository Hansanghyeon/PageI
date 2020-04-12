import React from 'react';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg`
  .st0 {
    opacity: 0.15;
    fill: #15535b;
  }
  .st1 {
    fill: #15535b;
  }
  .st3 {
    fill: #15535b;
    stroke: #dbdbdb;
    stroke-width: 0.5669;
    stroke-miterlimit: 10;
  }
  .st4 {
    fill: #dbdbdb;
  }
  .st5 {
    fill: #7c7c7c;
  }
  .st6 {
    fill: none;
    stroke: #7c7c7c;
    stroke-width: 6;
    stroke-miterlimit: 10;
  }

  .st7 {
    fill: none;
    stroke: #cecece;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 6;
  }
`;

const LoopPolyLine = keyframes`
  to {
    stroke-dashoffset: -12;
  }
`;

const AnimationPolyLine = styled.polyline`
  fill: none;
  stroke: #15535b;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 6;
  animation: ${LoopPolyLine} 1s infinite;
`;

const Interaction = () => (
  <Svg viewBox="0 0 632 153">
    <g>
      <polygon
        className="st0"
        points="574.2,74.6 574.2,129.9 567.3,129.9 597.5,152.7 627.7,129.9 620.8,129.9 620.8,74.6 	"
      />
      <path
        className="st1"
        d="M603.1,100.1c1.5-1.6,2.3-3.9,1.9-6.3c-0.5-3.2-3.2-5.7-6.5-6.1c-4.5-0.5-8.3,3-8.3,7.4c0,2,0.8,3.7,2,5.1
		c0.6,0.7,0.5,1.7-0.3,2.2c-2.3,1.7-3.9,4.5-3.9,7.7v10.8c0,5.3,4.3,9.6,9.6,9.6h0c5.3,0,9.6-4.3,9.6-9.6V110c0-3.1-1.5-5.9-3.9-7.7
		C602.6,101.8,602.5,100.7,603.1,100.1z"
      />
      <path
        className="st1"
        d="M613.7,60.5l-1.7-2.1c-0.8-1-1.2-2.1-1.2-3.4v-8.8c0-2.9-2.4-5.3-5.3-5.3h-15.7c-2.9,0-5.3,2.4-5.3,5.3V55
		c0,1.2-0.4,2.4-1.2,3.4l-1.7,2.1l-9,10.9c-2.9,3.5-0.4,8.7,4.1,8.7h7.8h13.2h13.2h7.8c4.5,0,7-5.2,4.1-8.7L613.7,60.5z"
      />
    </g>
    <g>
      <g>
        <g>
          <AnimationPolyLine points="51.1,64.8 51.1,8 597.8,8 597.8,26.2 			" />
          <g>
            <polygon className="st1" points="593.9,23.5 597.8,38 601.7,23.5 				" />
          </g>
        </g>
      </g>
    </g>
    <g>
      <polygon
        className="st1"
        points="93.8,116.4 93.8,71.7 8.6,71.7 8.6,116.4 49.6,116.4 49.6,118.8 35.3,118.8 35.3,121.9 67.1,121.9 
		67.1,118.8 52.8,118.8 52.8,116.4 	"
      />
      <rect x="11.4" y="74.6" className="st3" width="79.5" height="38.9" />
      <polygon
        className="st4"
        points="64.5,74.6 11.4,74.6 11.4,113.5 42.4,113.5 	"
      />
      <g>
        <path
          className="st1"
          d="M18.4,87.8h-1.6v-9.3h-3.1v-1.3h7.8v1.3h-3.1V87.8z"
        />
        <path
          className="st1"
          d="M26.9,87.5c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1h-1c-0.1,0-0.2,0-0.2-0.1
			c-0.1-0.1-0.1-0.1-0.1-0.2l-3.6-10.3h1.7l2.8,8.3l2.8-8.3h1.7L26.9,87.5z"
        />
      </g>
    </g>
    <g>
      <path
        className="st5"
        d="M385.9,84.7c1.5-1.6,2.3-3.9,1.9-6.3c-0.5-3.2-3.2-5.7-6.5-6.1c-4.5-0.5-8.3,3-8.3,7.4c0,2,0.8,3.7,2,5.1
		c0.6,0.7,0.5,1.7-0.3,2.2c-2.3,1.7-3.9,4.5-3.9,7.7v10.8c0,5.3,4.3,9.6,9.6,9.6h0c5.3,0,9.6-4.3,9.6-9.6V94.6
		c0-3.1-1.5-5.9-3.9-7.7C385.4,86.4,385.3,85.4,385.9,84.7z"
      />
      <path
        className="st5"
        d="M349.3,84.7c1.5-1.6,2.3-3.9,1.9-6.3c-0.5-3.2-3.2-5.7-6.5-6.1c-4.5-0.5-8.3,3-8.3,7.4c0,2,0.8,3.7,2,5.1
		c0.6,0.7,0.5,1.7-0.3,2.2c-2.3,1.7-3.9,4.5-3.9,7.7v10.8c0,5.3,4.3,9.6,9.6,9.6h0c5.3,0,9.6-4.3,9.6-9.6V94.6
		c0-3.1-1.5-5.9-3.9-7.7C348.8,86.4,348.7,85.4,349.3,84.7z"
      />
      <path
        className="st5"
        d="M282,82.4l-1.4,1.2c-0.6,0.5-1.5,0.8-2.3,0.8h-6c-2,0-3.6,1.6-3.6,3.6v10.7c0,2,1.6,3.6,3.6,3.6h6
		c0.8,0,1.6,0.3,2.3,0.8l1.4,1.2l7.4,6.1c2.4,1.9,5.9,0.3,5.9-2.8v-5.3v-9v-9v-5.3c0-3.1-3.6-4.7-5.9-2.8L282,82.4z"
      />
      <g>
        <g>
          <rect
            x="258.1"
            y="91.4"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 16.8354 228.502)"
            className="st5"
            width="52.4"
            height="5.1"
          />
          <path
            className="st4"
            d="M300.9,74.7l2.6,2.6l-36,36l-2.6-2.6L300.9,74.7 M300.9,72.5l-1.1,1.1l-36,36l-1.1,1.1l1.1,1.1l2.6,2.6
				l1.1,1.1l1.1-1.1l36-36l1.1-1.1l-1.1-1.1l-2.6-2.6L300.9,72.5L300.9,72.5z"
          />
        </g>
      </g>
      <circle className="st6" cx="284.2" cy="93.6" r="25.4" />
      <line className="st7" x1="105.8" y1="93.8" x2="246.2" y2="93.8" />
    </g>
  </Svg>
);

export default Interaction;
