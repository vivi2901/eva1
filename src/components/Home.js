import React from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import './Home.css';  

const Home = () => {
  return (
    <div id="cont">
      <title>Tangram</title>
        <div className="titulo">Tangram Un Enfoque Didactico</div>
        <div className="button-container">
            <Button
							variant='contained'
                            href="/estudiante"
						>
							Empezar Estudiante
						</Button>
            <Button
							variant='contained'
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

