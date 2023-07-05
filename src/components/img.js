import { uploadFile } from '../firebase/config';
import { useState } from 'react';

function Imagen() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fileInput">Selecciona un archivo</label>
        <input type="file" className="form-control-file" id="fileInput" onChange={handleFileChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        Subir
      </button>
    </form>
  );
}

export default Imagen;