import React, { useState } from 'react';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';

const TareaForm = ({ agregarTarea }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        agregarTarea({ titulo, descripcion, fecha });
        setTitulo('');
        setDescripcion('');
        setFecha('');
        setMensaje('Agregada con éxito'); // Establecer mensaje de éxito
        setTimeout(() => setMensaje(''), 3000); // Ocultar mensaje después de 3 segundos
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <Card style={{ width: '100%', maxWidth: '500px' }}>
                <Card.Body>
                    <Card.Title className="text-center">Agregar Nueva Tarea</Card.Title>
                    {mensaje && <Alert variant="success">{mensaje}</Alert>} {/* Mostrar mensaje */}
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
                            Agregar Tarea
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default TareaForm;
