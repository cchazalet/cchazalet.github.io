import axios from "axios";

const API = axios.create({
    baseURL: 'http://http://120.26.198.0', //url backend
    timeout: 2000
})

export default API