import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Estudiante from './components/Estudiante';
import Profesor from './components/Profesor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/estudiante' element={<Estudiante/>} />
        <Route path='/profesor' element={<Profesor/>} />
      </Routes>
    </Router>
  );
}

export default App;
