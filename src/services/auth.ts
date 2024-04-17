import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

console.log('api', import.meta.env.VITE_API_BASE_URL);
const login = async (data: any) => {
  return await axios.post(`${apiUrl}/login`, data).then((res) => res.data);

};

export default {
  login,
}