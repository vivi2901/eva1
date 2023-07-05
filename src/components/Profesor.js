import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import './Profesor.css';
import {uploadFile64, uploadFile} from '../firebase/config';
import { useNavigate  } from 'react-router-dom';
import { usePruebaData } from './PruebaContext';


const Profesor = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const { setPruebaData } = usePruebaData();
  const [file, setFile] = useState(null);

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
 
  const handleConfirmarClick64 = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('captura'));
      const base64Image = canvas.toDataURL();
      const uploadResult = await uploadFile64(base64Image);
      setResult(uploadResult);
      console.log(uploadResult)

      const data = {
        imageLink: uploadResult,
        paso1: formValues.paso1,
        paso2: formValues.paso2,
        paso3: formValues.paso3,
        paso4: formValues.paso4,
        paso5: formValues.paso5,
        paso6: formValues.paso6,
        paso7: formValues.paso7,
        // Agrega el resto de los campos según sea necesario
      };
      setPruebaData(data)
      setShowModal(false)
      console.log(data)
      console.log(setPruebaData)
    } catch (error) {
      console.log(error);
    }
  };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      const updatedFormValues = { ...formValues, [name]: value };
      setFormValues(updatedFormValues);
    };

    

    const handleSubmit = async (e) => {
      //e.preventDefault();
      try {
        const result = await uploadFile(file);
        console.log(result);
        const data = {
          imageLink: result,
          paso1: formValues.paso1,
          paso2: formValues.paso2,
          paso3: formValues.paso3,
          paso4: formValues.paso4,
          paso5: formValues.paso5,
          paso6: formValues.paso6,
          paso7: formValues.paso7,
          // Agrega el resto de los campos según sea necesario
        };
        setPruebaData(data)
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };

  return (
    <div className="containerP"  id='captura'>
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
            <Button variant="primary"  onClick={handleConfirmarClick64} >Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </div>
          {/* <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fileInput">Selecciona un archivo</label>
              <input type="file" className="form-control-file" id="fileInput" onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Subir
            </button>
          </form> */}
      </div>
      <div id='figura'>
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
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle6P" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle7P" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
          <Draggable>
            <svg id="triangle8P" className="block" >
              <polygon points="0,0 100,0 0,100"/>
            </svg>
          </Draggable>
        </div>
      </div>
      <div id="form" className="custom-form">
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 1:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso1"
              value={formValues.paso1 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 2:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso2"
              value={formValues.paso2 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 3:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso3"
              value={formValues.paso3 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 4:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso4"
              value={formValues.paso4 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 5:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso5"
              value={formValues.paso5 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 6:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso6"
              value={formValues.paso6 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Paso 7:</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Mover el triangulo grande azul.."
              name="paso7"
              value={formValues.paso7 || ''}
              onChange={handleInputChange}
            />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profesor;
