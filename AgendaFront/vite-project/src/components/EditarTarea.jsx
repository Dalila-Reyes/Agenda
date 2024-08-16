// src/components/EditarTarea.jsx
import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import TareaService from '../services/TareaService';

const EditarTarea = () => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        TareaService.obtenerTarea(id).then(response => {
            const tarea = response.data;
            setTitulo(tarea.titulo);
            setDescripcion(tarea.descripcion);
            setFecha(tarea.fecha);
        });
    }, [id]);

    const manejarSubmit = (e) => {
        e.preventDefault();
        TareaService.actualizarTarea(id, { titulo, descripcion, fecha }).then(() => {
            navigate('/mis-tareas'); // Redirige a la página de mis tareas después de guardar los cambios
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '100%', maxWidth: '500px' }}>
                <Card.Body>
                    <Card.Title className="text-center">Editar Tarea</Card.Title>
                    <Form onSubmit={manejarSubmit}>
                        <Form.Group controlId="formTitulo">
                            <Form.Control
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Título"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescripcion" className="mt-3">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                placeholder="Descripción"
                            />
                        </Form.Group>
                        <Form.Group controlId="formFecha" className="mt-3">
                            <Form.Control
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Guardar Cambios
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditarTarea;
