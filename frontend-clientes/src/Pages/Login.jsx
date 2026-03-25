import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import { loginUser } from "../services/authService";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginUser(username, password);
      localStorage.setItem("token", data.token);
      navigate("/clientes");
      console.log("Login correcto", data);

    // eslint-disable-next-line no-unused-vars
    } catch (error) {

      console.log("Error de login");

    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>CRM Clientes</h1>
          <p>Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <p className="login-footer">Sistema de gestión de clientes</p>
      </div>
    </div>
  );
}