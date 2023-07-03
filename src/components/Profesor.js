import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal } from 'react-bootstrap';
import './Profesor.css';


const Profesor = () => {
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

  return (
    <div className="containerP">
      <div id="cuadro"><h6>Realiza tu figura aca</h6></div>
      <div className="title-containerP">
        <h1>Profesor</h1>
        <div id="modal">
        <Button onClick={() => setShowModal(true)} id="btnModal">Terminar</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Terminar Figura</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p1>Se enviara esta figura a la vista del estudiante</p1>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary">Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
      <div>
        <div id="blockTrayP">
          <Draggable>
            <svg id="squareP" className="block">
              <polygon points="0,0 100,0 100,100 0,100" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle1P" className="block">
              <polygon points="0,0 100,0 100,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle2P" className="block">
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle3P" className="block">
              <polygon points="0,0 0,100 100,100" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle4P" className="block">
              <polygon points="0,0 100,0 100,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle5P" className="block">
              <rect x="98" y="0" width="149" height="75" fill="#665c84" transform="skewX(-45)" />
            </svg>
          </Draggable>
          <Draggable>
            <svg id="square1P" className="block" width="146" height="146">
              <polygon points="73,0 146,73 73,146 0,73" style={{ fill: '#ff7657' }} />
            </svg>
          </Draggable>
        </div>
      </div>
      <div id="form" className="custom-form">
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 1:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el triangulo grande azul.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 2:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el triangulo grande agua.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 3:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el triangulo mediano rosa.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 4:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el triangulo pequeño naranja.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 5:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el triangulo pequeño azul.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 6:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el cuadrado.." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 7:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Mover el paralelogramo.." />
            </div>
          </div>
          {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
         {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
        </form>
      </div>
    </div>
  );
};

export default Profesor;
