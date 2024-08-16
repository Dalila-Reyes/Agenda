import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Container } from 'react-bootstrap';
import TareaService from '../services/TareaService';

const MisTareas = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        TareaService.obtenerTareas().then(response => {
            const tareasOrdenadas = response.data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            setTareas(tareasOrdenadas);
        });
    }, []);

    const manejarCambioEstado = (id, estadoActual) => {
        // Cambia el estado de la tarea
        const nuevoEstado = estadoActual === 'completada' ? 'pendiente' : 'completada';
        
        // Prepara los datos para enviar a la API
        const tareaActualizada = { estado: nuevoEstado };
        
        // Llama al servicio para actualizar la tarea
        TareaService.actualizarTarea(id, tareaActualizada)
            .then(() => {
                // Actualiza la lista de tareas en el estado local
                setTareas(tareas.map(tarea =>
                    tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea
                ));
            })
            .catch(error => {
                console.error('Error al actualizar la tarea:', error);
            });
    };
    

    const eliminarTarea = (id) => {
        TareaService.eliminarTarea(id).then(() => {
            setTareas(tareas.filter(tarea => tarea.id !== id));
        });
    };

    return (
        <Container className="my-4 pt-5">
            <Card>
                <Card.Header className="bg-primary text-white">
                    <h4>Mis Tareas</h4>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Completar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center">No tienes tareas guardadas.</td>
                                </tr>
                            ) : (
                                tareas.map((tarea) => (
                                    <tr key={tarea.id} className={tarea.estado === 'completada' ? 'table-success' : ''}>
                                        <td>
                                            <Card.Title>{tarea.titulo}</Card.Title>
                                        </td>
                                        <td>
                                            <Card.Text>{tarea.descripcion}</Card.Text>
                                        </td>
                                        <td>
                                            <Card.Subtitle className="mb-2 text-muted"> {new Date(tarea.fecha).toLocaleDateString()}</Card.Subtitle>
                                        </td>
                                        <td>
                                            <Card.Subtitle className={`mb-2 text-${tarea.estado === 'completada' ? 'success' : 'warning'}`}>
                                                {tarea.estado === 'completada' ? 'Completada' : 'Pendiente'}
                                            </Card.Subtitle>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={tarea.estado === 'completada'}
                                                onChange={() => manejarCambioEstado(tarea.id, tarea.estado)}
                                            />
                                        </td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                onClick={() => eliminarTarea(tarea.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MisTareas;
