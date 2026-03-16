import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import CreateCliente from "../Pages/CreateCliente";
import Clientes from "../Pages/Clientes";
import ClienteDetalle from "../Pages/ClienteDetalle";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

<Route path="/clientes/crear" element={<CreateCliente />} />


<Route path="/clientes" element={<Clientes />} />
<Route path="/clientes/:id" element={<ClienteDetalle />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;