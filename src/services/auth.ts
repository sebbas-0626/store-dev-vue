import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

// Define a type for authentication payloads
interface AuthPayload {
  email: string;
  password: string;
  // Add other fields if needed
}

const register = async (data: AuthPayload) => {
  return await axios.post(`${apiUrl}/register`, data).then((res) => res.data);
};

// console.log('api', import.meta.env.VITE_API_BASE_URL);
const login = async (data: AuthPayload) => {
  return await axios.post(`${apiUrl}/login`, data).then((res) => res.data);

};

export default {
  login,
  register
  
}