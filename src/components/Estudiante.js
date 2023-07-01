import React, { useEffect , useState } from 'react';
import Draggable from 'react-draggable';
import { ListGroup, ListGroupItem } from 'reactstrap';
import choeteImage from '../img/choete.png';
import { Button, Modal } from 'react-bootstrap';
import './Estudiante.css';

const Estudiante = () => {
  const [showModal, setShowModal] = useState(false);
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
    <div className="containerE" id="containerE">
      <div className="title-container">
      <div id="lista" style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <ListGroup style={{ maxWidth: '200px' }}>
          <ListGroupItem>
            <h6 className="list-group-item-heading">Pasos</h6>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 1:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 2:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 3:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 4:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 5:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 6:</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 7:</p>
          </ListGroupItem>
        </ListGroup>
      </div>
        <h1>Estudiante</h1>
      </div>
      <div id="modal">
        <Button onClick={() => setShowModal(true)} id="btnModal">Terminar</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Mandar Figura</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p1>¿La figura que creaste es igual a la figura de referencia?</p1>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary">No</Button>
            <Button variant="primary">Si</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div id="lvl1">
        <img src={choeteImage} alt="imagen choete" />
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
              <rect x="98" y="0" width="149" height="75" fill="#665c84" transform="skewX(-45)" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="square1" className="block" width="146" height="146">
              <polygon points="73,0 146,73 73,146 0,73" style={{ fill: '#ff7657' }} />
            </svg>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
