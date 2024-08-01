import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://talent2show.onrender.com', // URL base da sua API
  timeout: 5000, // Timeout de 5 segundos (opcional)
  headers: {
    'Content-Type': 'application/json',
    // Você pode adicionar headers comuns aqui, se necessário
  },
});

export default axiosInstance;
