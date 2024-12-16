import axios from "axios";

const api = axios.create({
    // baseURL:"http://localhost:5000/api"
    baseURL: "https://ozarkbackend-production-4da6.up.railway.app/api"
})

export default api;