import { useState } from "react";
import { loginUser } from "../services/authService";
import "../Styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginUser(username, password);

      console.log("Login correcto", data);

    // eslint-disable-next-line no-unused-vars
    } catch (error) {

      console.log("Error de login");

    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}

export default Login;