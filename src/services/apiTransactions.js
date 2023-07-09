import axios from "axios";
import dotenv from "dotenv";

function getTransactions(token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/home`, auth);
    return promise;
}

function createTransaction(body, tipo, token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/nova-transacao/${tipo}`, body, auth);
    return promise;
}

function updateTransaction(body, tipo, id, token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.put(`${import.meta.env.VITE_API_URL}/editar-registro/${tipo}/${id}`, body, auth);
    return promise;
}

function deleteTransaction(id, token) {
    const auth = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const promise = axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`, auth);
    return promise;
}

const apiTranscations = { getTransactions, createTransaction, updateTransaction, deleteTransaction };
export default apiTranscations;