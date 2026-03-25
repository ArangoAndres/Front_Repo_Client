import { useEffect, useState, useCallback } from "react";
import {
  getFilesByClienteId,
  downloadFile,
  uploadFile
} from "../services/FileService";

import "../Styles/ClienteArchivos.css";

function ClienteArchivos({ clienteId }) {

  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [nombrePersonalizado, setNombrePersonalizado] = useState("");

  const cargarArchivos = useCallback(async () => {
    try {
      const data = await getFilesByClienteId(clienteId);
      setFiles(data);
    } catch (error) {
      console.log(error);
    }
  }, [clienteId]);

 useEffect(() => {

    if (clienteId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      cargarArchivos();
    }

  }, [clienteId]);


  // ✅ Subir archivo
  const handleUpload = async () => {

    if (!file) return;

    try {

      await uploadFile(
        clienteId,
        file,
        nombrePersonalizado
      );

      setFile(null);
      setNombrePersonalizado("");

      await cargarArchivos();

    } catch (error) {
      console.log(error.response);
  console.log(error.response.data);
      console.log(error);
    }

  };


  // ✅ Descargar
  const handleDownload = async (file) => {
    try {

      const response = await downloadFile(file.id);

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", file.nombreOriginal);

      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.log(error);
    }
  };


  // ✅ Visualizar
  const handlePreview = (file) => {
    window.open(
      `http://localhost:5196${file.ruta}`,
      "_blank"
    );
  };


  return (
    <div className="archivos-container">

      <h3>Archivos</h3>

      <div className="upload-section">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type="text"
          placeholder="Nombre personalizado"
          value={nombrePersonalizado}
          onChange={(e) =>
            setNombrePersonalizado(e.target.value)
          }
        />

        <button onClick={handleUpload}>
          Subir
        </button>

      </div>


      <div className="archivos-lista">

        <div className="archivos-header">
          <span>Nombre archivo</span>
          <span>Opciones</span>
        </div>

        <div className="archivos-body">

          {files.length === 0 && (
            <p className="sin-archivos">
              No hay archivos
            </p>
          )}

          {files.map((file) => (

            <div
              key={file.id}
              className="archivo-row"
            >

              <span className="archivo-nombre">
                {file.nombre_personalizado ||
                  file.nombreOriginal}
              </span>

              <div className="archivo-opciones">

                <button
                  onClick={() => handleDownload(file)}
                >
                  Descargar
                </button>

                <button
                  onClick={() => handlePreview(file)}
                >
                  Visualizar
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ClienteArchivos;