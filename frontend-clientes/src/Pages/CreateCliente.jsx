import { useState } from "react";
import "../Styles/cliente.css";
import { createCliente } from "../services/clientesService";

function CreateCliente() {

  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    cedula: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    departamento: ""
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {

    await createCliente(cliente);

    alert("Cliente creado correctamente");

  } catch (error) {

    console.log(error);
    alert("Error al crear cliente");

  }

  };

  return (
    <div className="cliente-container">

      <form className="cliente-form" onSubmit={handleSubmit}>

        <h2>Crear Cliente</h2>

        <input
          name="nombre"
          placeholder="Nombre"
          value={cliente.nombre}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={cliente.email}
          onChange={handleChange}
        />

        <input
          name="cedula"
          placeholder="Cédula"
          value={cliente.cedula}
          onChange={handleChange}
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={cliente.telefono}
          onChange={handleChange}
        />

        <input
          name="direccion"
          placeholder="Dirección"
          value={cliente.direccion}
          onChange={handleChange}
        />

        <input
          name="ciudad"
          placeholder="Ciudad"
          value={cliente.ciudad}
          onChange={handleChange}
        />

        <input
          name="departamento"
          placeholder="Departamento"
          value={cliente.departamento}
          onChange={handleChange}
        />

        <button type="submit">
          Crear Cliente
        </button>

      </form>

    </div>
  );
}

export default CreateCliente;