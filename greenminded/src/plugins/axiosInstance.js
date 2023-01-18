import axios from "axios";

const API = axios.create({
    baseURL: 'http://120.26.198.0:8080', //url backend
    // baseURL: 'http://localhost:8081',
    timeout: 300000  
})

export default API