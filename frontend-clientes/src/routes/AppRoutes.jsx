import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import CreateCliente from "../Pages/CreateCliente";
import Clientes from "../Pages/Clientes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

<Route path="/clientes/crear" element={<CreateCliente />} />


<Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;