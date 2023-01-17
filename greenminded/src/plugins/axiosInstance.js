import axios from "axios";

const API = axios.create({
    baseURL: 'http://120.26.198.0:8080', //url backend
    timeout: 300000  
})

export default API