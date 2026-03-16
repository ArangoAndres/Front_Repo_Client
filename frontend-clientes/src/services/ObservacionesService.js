import api from "../assets/api";

export const getObservacionesByClienteId = async (clienteId) => {
    const response = await api.get(`/observaciones/cliente/${clienteId}`);
    console.log("getObservacionesByClienteId", response.data);
    return response.data;
};

export const createObservacion = async (clienteId, texto) => {

  const response = await api.post("/observaciones", {
    clienteId: clienteId,
    observacionTexto: texto
  });

  return response.data;

};
