// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="#home" className="fs-3">Mi Agenda</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="fs-6">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/mis-tareas" className="fs-6">Mis Tareas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
