import { useState, useEffect } from "react";
import { getClientes } from "../services/clientesService";
import "../Styles/clientes.css";

function Clientes() {

  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

useEffect(() => {
  const cargarClientes = async () => {
    try {
      const data = await getClientes();
      setClientes(data);
    } catch (error) {
      console.log(error);
    }
  };

  cargarClientes();
}, []);


  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    cliente.cedula?.includes(busqueda)
  );

  return (
    <div className="clientes-container">

      <input
        className="buscador"
        placeholder="Buscar cliente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="lista-clientes">

        {clientesFiltrados.map((cliente) => (
          <div key={cliente.id} className="cliente-card">

            <h3>{cliente.nombre}</h3>
            <p>{cliente.cedula}</p>
            <p>{cliente.telefono}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Clientes;