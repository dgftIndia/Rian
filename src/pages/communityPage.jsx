import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CONFIG = {
  circleSize: {
    width: 80,
    height: 80,
  },
  lineColor: '#FFFF',
  border: '#FFFFF',
  animationDuration: 2, // Duration in seconds for line animation
};

const CirclePositions = {
  cc1: { x: 197, y: 82, image: 'Images/cc1.png', className: 'cc1-style', showDelay: 0, callout: 'Hello' },
  cc2: { x: 92, y: 300, image: 'Images/cc2.png', className: 'cc2-style', showDelay: 2, callout: 'Bonjour' },
  cc3: { x: 268, y: 260, image: 'Images/cc3.png', className: 'cc3-style', showDelay: 2.3, callout: 'Circle 3 Info' },
  cc4: { x: 50, y: 587, image: 'Images/cc4.png', className: 'cc4-style', showDelay: 4.3, callout: 'Circle 4 Info' },
  cc5: { x: 420, y: 600, image: 'Images/cc5.png', className: 'cc5-style', showDelay: 4.6, callout: 'Circle 5 Info' },
  cc6: { x: 720, y: 650, image: 'Images/cc6.png', className: 'cc6-style', showDelay: 6.6, callout: 'Circle 6 Info' },
  cc7: { x: 1000, y: 120, image: 'Images/cc7.png', className: 'cc7-style', showDelay: 6.9, callout: 'Circle 7 Info' },
  cc8: { x: 1300, y: 300, image: 'Images/cc8.png', className: 'cc8-style', showDelay: 8.9, callout: 'Circle 8 Info' },
  cc9: { x: 1200, y: 500, image: 'Images/cc9.png', className: 'cc9-style', showDelay: 9.2, callout: 'Circle 9 Info' },
  cc10: { x: 890, y: 650, image: 'Images/cc9.png', className: 'cc10-style', showDelay: 11.2, callout: 'Circle 10 Info' }
};

const Circle = ({ id, position, onPositionChange, size, isVisible }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.width / 2;
    const y = e.clientY - rect.height / 2;
    onPositionChange(id, { x, y });
  };
  

  return (
    <div
      ref={ref}
      className={`circle-container absolute cursor-move ${position.className || ''}`}
      style={{ 
        left: position.x, 
        top: position.y,
        animation: isVisible ? `popIn 0.6s ease-out forwards ${position.showDelay}s` : 'none',
        opacity: 0
      }}
      onDragEnd={handleMove}
      draggable="true"
    >
      <div 
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        className="border-2 rounded-full flex items-center justify-center relative overflow-hidden"
      >
        <img 
          src={position.image} 
          alt={`Circle ${id}`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div
        className="callout"
        style={{
          position: 'absolute',
          top: 1, // Adjust to position above or beside the circle
          left: size.width , // Adjust to position beside the circle
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          backgroundColor: 'white', // Changed to white
          color: 'black',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '0.875rem',
          whiteSpace: 'nowrap',
          fontFamily: 'Rubik, sans-serif',
          width: '80px', // Set a fixed width or adjust as necessary
          maxWidth: '150px',
          textAlign: 'left', // Center align the text
          lineHeight: '1.5', 
        }}
      >
        {position.callout}
      </div>
    </div>
  );
};

const ConnectionLine = ({ start, end, circleSize, delay }) => {
  const [pathLength, setPathLength] = useState(0);
  const pathRef = React.useRef();

  const calculatePath = (start, end) => {
    const radius = circleSize.width / 2;
    const x1 = start.x + radius;
    const y1 = start.y + radius;
    const x2 = end.x + radius;
    const y2 = end.y + radius;

    const controlPoint1X = (x1 + x2) / 2;
    const controlPoint1Y = y1 - Math.min(100, Math.abs(x2 - x1) / 2);
    const controlPoint2X = (x1 + x2) / 2;
    const controlPoint2Y = y2 + Math.min(100, Math.abs(x2 - x1) / 2);

    return `M ${x1} ${y1} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x2} ${y2}`;
  };

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <path
      ref={pathRef}
      className="curved-line"
      d={calculatePath(start, end)}
      stroke={CONFIG.lineColor}
      strokeWidth="2"
      fill="none"
      style={{
        strokeDasharray: '10, 5',
        opacity: 0, // Start invisible
        animation: `drawDashedLine ${CONFIG.animationDuration}s ease-out ${delay}s forwards, fadeIn 0.5s ease-out ${delay}s forwards`
      }}
    />
  );
};

const CommunityPage = () => {
  const [circles, setCircles] = useState(CirclePositions);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const updateCirclePosition = (circleId, newPosition) => {
    setCircles(prev => ({
      ...prev,
      [circleId]: { ...prev[circleId], ...newPosition }
    }));
  };

  const connections = {
    'cc1-cc2': { 
      start: circles.cc1, 
      end: circles.cc2,
      delay: 0 
    },
    'cc3-cc4': { 
      start: circles.cc3, 
      end: circles.cc4,
      delay: 2.3 
    },
    'cc5-cc6': {
      start: circles.cc5,
      end: circles.cc6,
      delay: 4.6
    },
    'cc7-cc8': {
      start: circles.cc7,
      end: circles.cc8,
      delay: 6.9
    },
    'cc9-cc10': {
      start: circles.cc9,
      end: circles.cc10,
      delay: 9.2
    }
  };

  return (
    <div className="community-container relative min-h-screen">
      <style>
        {`
          @keyframes drawDashedLine {
            0% {
              stroke-dashoffset: 1000;
              opacity: 0;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.5;
            }
          }
          
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .curved-line {
            stroke: #F4F4F4;
            stroke-width: 2;
            fill: none;
          }
        `}
      </style>

      <h1 className="community-title">Community Page</h1>

      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Object.values(connections).map((connection, index) => (
          <ConnectionLine
            key={index}
            start={connection.start}
            end={connection.end}
            circleSize={CONFIG.circleSize}
            delay={connection.delay}
          />
        ))}
      </svg>

      {Object.entries(circles).map(([id, position]) => (
        <Circle
          key={id}
          id={id}
          position={position}
          onPositionChange={(id, pos) => updateCirclePosition(id, pos)}
          size={CONFIG.circleSize}
          isVisible={isVisible}
        />
      ))}

      <div className="community-grid">
        <div className="community-card">
          <h2 className="community-card-title">Welcome to Rian Community Page</h2>
          <p className="community-card-description">
            We are building a network of artists and professionals with global opportunities.
          </p>
          <button className="community-button">Create your profile</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
