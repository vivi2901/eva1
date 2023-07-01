import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import './Estudiante.css';

const Estudiante = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.block');
    let angle = 90;

    blocks.forEach((block) => {
      block.addEventListener('click', handleBlockClick);
    });

    function handleBlockClick(event) {
      event.stopPropagation();
      const target = event.currentTarget;
    
      if (target.id === 'square1') {
        const currentRotation = target.getAttribute('transform');
        const newRotation = currentRotation ? `${currentRotation} rotate(45)` : 'rotate(45)';
        target.setAttribute('transform', newRotation);
      } else {
        const currentRotation = target.getAttribute('transform');
        const newRotation = currentRotation ? `${currentRotation} rotate(90)` : 'rotate(90)';
        target.setAttribute('transform', newRotation);
      }
    }
 


    return () => {
      blocks.forEach((block) => {
        block.removeEventListener('click', handleBlockClick);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="title-container">
        <h1>Estudiante</h1>
      </div>
      <div>
        <div id="blockTray">
          <Draggable>
            <svg id="square" className="block">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle1" className="block">
              <polygon points="0,0 100,0 100,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle2" className="block">
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle3" className="block">
              <polygon points="0,0 0,100 100,100" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle4" className="block">
              <polygon points="0,0 100,0 100,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle5" className="block">
              <rect x="98" y="0" width="149" height="75" fill="green" transform="skewX(-45)" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="square1" className="block" width="146" height="146">
              <polygon points="73,0 146,73 73,146 0,73" style={{ fill: 'red' }} />
            </svg>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
