import React, { useEffect , useState } from 'react';
import Draggable from 'react-draggable';
import { ListGroup, ListGroupItem } from 'reactstrap';
import choeteImage from '../img/choete.png';
import { Button, Modal } from 'react-bootstrap';
import './Estudiante.css';
import { usePruebaData } from './PruebaContext';

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
      const figureId = target.id;
    
      let clickCount = target.getAttribute('data-click-count') || 0;
      clickCount = parseInt(clickCount, 10) + 1;
    
      if (clickCount % 2 === 0) {
        const currentRotation = target.getAttribute('transform');
        const newRotation = currentRotation ? `${currentRotation} rotate(45)` : 'rotate(45)';
        target.setAttribute('transform', newRotation);
      }
    
      target.setAttribute('data-click-count', clickCount);
    }

    return () => {
      blocks.forEach((block) => {
        block.removeEventListener('click', handleBlockClick);
      });
    };
  }, []);
  const { imageLink, paso1, paso2, paso3, paso4,paso5,paso6,paso7} = usePruebaData();
  console.log(imageLink)
  return (
    <div className="containerE" id="containerE">
      <div className="title-container">
      <div id="lista" style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <ListGroup style={{ maxWidth: '200px' }}>
          <ListGroupItem>
            <h6 className="list-group-item-heading">Pasos</h6>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 1: {paso1}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 2: {paso2}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 3: {paso3}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 4: {paso4}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 5: {paso5}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 6: {paso6}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p className="list-group-item-text">Paso 7: {paso7}</p>
          </ListGroupItem>
        </ListGroup>
      </div>
        <h1>Estudiante</h1>
      </div>
      <div id="modal">
        <Button onClick={() => setShowModal(true)} id="btnModalE">Terminar</Button>
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
      <div id="lvl1" style={{ width: '500px', height: '500px' }}>
        <img src={imageLink} alt="imagen choete" className="img-fluid" />
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
            <svg id="triangle5PEst" className="block">
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle6PEst" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle7PEst" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle8PEst" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
