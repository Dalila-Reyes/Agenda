// src/components/Footer.jsx
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container className="text-center">
                <Navbar.Text>© 2024 Mi Agenda|Dalila Limbett Reyes Perez</Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
