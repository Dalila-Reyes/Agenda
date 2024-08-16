import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tareas';

const obtenerTareas = () => {
    return axios.get(API_URL);
};

const crearTarea = (tarea) => {
    return axios.post(API_URL, tarea)
        .catch(error => {
            console.error('Error al crear tarea:', error);
            throw error;
        });
};

const actualizarTarea = (id, tarea) => {
    return axios.put(`${API_URL}/${id}`, tarea);
};

const eliminarTarea = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea
};
