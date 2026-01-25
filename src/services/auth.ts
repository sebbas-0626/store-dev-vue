import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const register = async (data: any) => {
  return await axios.post(`${apiUrl}/register`, data).then((res) => res.data);
};

// console.log('api', import.meta.env.VITE_API_BASE_URL);
const login = async (data: any) => {
  return await axios.post(`${apiUrl}/login`, data).then((res) => res.data);

};

export default {
  login,
  register
  
}