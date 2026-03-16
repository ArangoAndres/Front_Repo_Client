import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/clienteDetalle.css";
import { getClienteById } from "../services/clientesService";
import { createObservacion, getObservacionesByClienteId } from "../services/ObservacionesService";

function ClienteDetalle() {

  const { id } = useParams();

  const [cliente, setCliente] = useState(null);
  const [observaciones, setObservaciones] = useState([]);
  const [nuevaObs, setNuevaObs] = useState("");

useEffect(() => {
  const cargarClientes = async () => {
    try {
      const cliente = await getClienteById(id);
      setCliente(cliente);
    } catch (error) {
      console.log(error);
    }
  };

const cargarObservaciones = async () => {
    try {
        const data = await getObservacionesByClienteId(id);
        setObservaciones(data);
        console.log("cargarObservaciones", data);
    } catch (error) {
        console.log(error);
    }
};

  cargarClientes();
  cargarObservaciones();

}, [id]);



 const guardarObservacion = async () => {

  if (!nuevaObs.trim()) return;

  try {

    const obs = await createObservacion(id, nuevaObs);

    setObservaciones(prev => [...prev, obs]);

    setNuevaObs("");

  } catch (error) {

    console.log(error);

  }

};

  if (!cliente) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">

      <h2>{cliente.nombre}</h2>

      <div className="cliente-info">
        <p>Email: {cliente.email}</p>
        <p>Telefono: {cliente.telefono}</p>
        <p>Direccion: {cliente.direccion}</p>
        <p>Ciudad: {cliente.ciudad}</p>
        <p>Departamento: {cliente.departamento}</p>
      </div>

      <h3>Observaciones</h3>

      <div className="observaciones">

        {observaciones.map((obs) => (
          <div key={obs.id} className="observacion">

            <small>
              {new Date(obs.fecha + "T00:00:00").toLocaleDateString()}
            </small>

            <p>{obs.observacionTexto}</p>

          </div>
        ))}

      </div>

      <div className="nueva-observacion">

        <textarea
          placeholder="Nueva observación..."
          value={nuevaObs}
          onChange={(e) => setNuevaObs(e.target.value)}
        />

        <button onClick={guardarObservacion}>
          Guardar
        </button>

      </div>

    </div>
  );
}
export default ClienteDetalle;