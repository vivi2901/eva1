import React from 'react';
import { usePruebaData } from './PruebaContext';

const Prueba = () => {
    const { imageLink, paso1, paso2, paso3, paso4,paso5,paso6,paso7} = usePruebaData();
    console.log(imageLink)
    console.log(paso1)
    return (
      <div>
        <img src={imageLink} alt="Figura" />
        <ul>
          <li>Paso 1: {paso1}</li>
          <li>Paso 2: {paso2}</li>
          <li>Paso 3: {paso3}</li>
          <li>Paso 4: {paso4}</li>
          <li>Paso 5: {paso5}</li>
          <li>Paso 6: {paso6}</li>
          <li>Paso 7: {paso7}</li>
        </ul>
      </div>
    );
  };
export default Prueba;
