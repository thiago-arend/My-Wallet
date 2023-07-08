import axios from "axios";
import dotenv from "dotenv";

function login(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body);
    return promise;
}

const apiAuth = { login, signUp };
export default apiAuth;