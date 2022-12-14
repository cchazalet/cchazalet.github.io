import axios from "axios";

const API = axios.create({
    baseURL: 'http://120.26.198.0', //url backend
    timeout: 30000
})

export default API