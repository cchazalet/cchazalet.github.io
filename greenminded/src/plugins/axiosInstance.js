import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080', //url backend
    timeout: 2000
})

export default API