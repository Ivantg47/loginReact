import axios from "axios";

const API_URL = 'http://localhost:8080/usuarios';

export const listarUsuarios = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.error(error);
    }
    return null
}

export const agregarUsuario = async ({usuario, pass, correo}) => {
    try {
        return await axios.post(API_URL, {
            usuario,
            pass,
            correo
        });
    } catch (error) {
        console.error(error);
    }
    return undefined
}

export const actualizarUsuario = async ({id, usuario, correo}) => {
    try {
        return await axios.put(`${API_URL}/${id}`, {
            usuario,
            correo
        });
    } catch (error) {
        console.error(error);
    }
    return undefined
}

export const eliminarUsuario = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
    return undefined
}