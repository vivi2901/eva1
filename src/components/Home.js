import React from 'react';
import './Home.css';

import { Button, Modal } from 'react-bootstrap';  

const Home = () => {
  return (
    <div id="cont">
      <title>Tangram</title>
        <div className="titulo">Tangram Un Enfoque Didactico</div>
        <div className="button-container">
            <Button
							variant='primary'
                            href="/estudiante"
						>
							Empezar Estudiante
						</Button>
            <Button
							variant='primary'
                            href="/profesor"
						>
							Empezar Profesor
						</Button>
        </div>

        <div className="tangram">
          <div className="pieces triangles big-tri-dk"></div>
          <div className="pieces triangles big-tri-lt"></div>
          <div className="pieces triangles med-tri"></div>
          <div className="pieces triangles sm-tri-lt"></div>
          <div className="pieces triangles sm-tri-dk"></div>
          <div className="pieces square"></div>
          <div className="pieces parallel"></div>
        </div>
    </div>
  );
};

export default Home;

