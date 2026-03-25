import api from "../assets/api";

// ✅ Subir archivo
export const uploadFile = async (clienteId, file, nombrePersonalizado = "") => {
  const formData = new FormData();

  formData.append("archivo", file); // 🔥 debe coincidir con DTO
  formData.append("clienteId", clienteId);
  formData.append("nombre_personalizado", nombrePersonalizado);

  const response = await api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return response.data;
};

// ✅ Reemplazar archivo
export const replaceFile = async (id, file, nombrePersonalizado = "") => {
  const formData = new FormData();

  formData.append("archivo", file);
  formData.append("nombre_personalizado", nombrePersonalizado);

  const response = await api.put(`/files/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return response.data;
};

// ✅ Obtener archivos por cliente
export const getFilesByClienteId = async (clienteId) => {
  const response = await api.get(`/files/cliente/${clienteId}`);
  return response.data;
};

// ✅ Eliminar archivo
export const deleteFile = async (id) => {
  const response = await api.delete(`/files/${id}`);
  return response.data;
};

// ✅ Descargar archivo
export const downloadFile = async (id) => {
  const response = await api.get(`/files/download/${id}`, {
    responseType: "blob" 
  });

  return response;
};