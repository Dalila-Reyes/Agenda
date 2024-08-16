// src/components/Home.jsx
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de que la ruta es correcta

const Home = () => {
    return (
        <Container fluid className="home-background my-4 pt-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>Bienvenido a Mi Agenda</h1>
                    <p>Organiza tus tareas y mantén el control de tus actividades diarias.</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tareas Pendientes</Card.Title>
                            <Card.Text>
                                {/* Puedes agregar más texto aquí si es necesario */}
                            </Card.Text>
                            <Link to="/mis-tareas">
                                <Button variant="primary">Ver Tareas</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Crear Nueva Tarea</Card.Title>
                            <Card.Text>
                                {/* Puedes agregar más texto aquí si es necesario */}
                            </Card.Text>
                            <Link to="/tareas/crear">
                                <Button variant="primary">Agregar Tarea</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Resumen Diario</Card.Title>
                            <Card.Text>
                                {/* Puedes agregar más texto aquí si es necesario */}
                            </Card.Text>
                            <Link to="/resumen">
                                <Button variant="primary">Ver Resumen</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
