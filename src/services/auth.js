import axios from "axios";
const apiUrl = import.meta.env.PUBLIC_API_URL;


const login = async (data) => {
    return await axios.post(`${apiUrl}/login`, data).then((res) => res.data);
  };

  export default{
    login,
    
  }