import React, { createContext, useContext, useState,useEffect } from 'react';

const PruebaContext = createContext();

export const PruebaProvider = ({ children }) => {
  const [imageLink, setImageLink] = useState('');
  const [paso1, setPaso1] = useState('');
  const [paso2, setPaso2] = useState('');
  const [paso3, setPaso3] = useState('');
  const [paso4, setPaso4] = useState('');
  const [paso5, setPaso5] = useState('');
  const [paso6, setPaso6] = useState('');
  const [paso7, setPaso7] = useState('');

  const setPruebaData = (data) => {
    setImageLink(data.imageLink);
    setPaso1(data.paso1);
    setPaso2(data.paso2);
    setPaso3(data.paso3);
    setPaso4(data.paso4);
    setPaso5(data.paso5);
    setPaso6(data.paso6);
    setPaso7(data.paso7);
    // Guardar los datos en el almacenamiento local
  localStorage.setItem('pruebaData', JSON.stringify(data));
  };
  const clearPruebaData = () => {
    setImageLink('');
    setPaso1('');
    setPaso2('');
    setPaso3('');
    setPaso4('');
    setPaso5('');
    setPaso6('');
    setPaso7('');
  };
  useEffect(() => {
    const savedData = localStorage.getItem('pruebaData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setPruebaData(parsedData);
    }
  }, []);
  console.log(imageLink)
  console.log(paso1)
  return (
    <PruebaContext.Provider
      value={{
        imageLink,
        paso1,
        paso2,
        paso3,
        paso4,
        paso5,
        paso6,
        paso7,
        setPruebaData,
        clearPruebaData,
      }}
    >
      {children}
    </PruebaContext.Provider>
  );
};

export const usePruebaData = () => useContext(PruebaContext);
