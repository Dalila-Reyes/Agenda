// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TareaForm from "./components/TareaForm";
import ListaTareas from "./components/ListaTareas";
import MisTareas from "./components/MisTareas";
import TareaService from "./services/TareaService";
import Home from './components/Home';

import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import ResumenSemanal from "./components/ResumenSemanal.JSX";

const App = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        TareaService.obtenerTareas().then(response => setTareas(response.data));
    }, []);

    const agregarTarea = (tarea) => {
        TareaService.crearTarea(tarea).then(response => {
            setTareas([...tareas, response.data]);
        });
    };

    const actualizarTarea = (id, tareaActualizada) => {
        TareaService.actualizarTarea(id, tareaActualizada).then(() => {
            setTareas(tareas.map(tarea => tarea.id === id ? tareaActualizada : tarea));
        });
    };

    const eliminarTarea = (id) => {
        TareaService.eliminarTarea(id).then(() => {
            setTareas(tareas.filter(tarea => tarea.id !== id));
        });
    };

    return (
      <Router>
        <Header />
        <Container className="mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mis-tareas" element={<MisTareas />} />
            <Route path="/tareas" element={<ListaTareas tareas={tareas} actualizarTarea={actualizarTarea} eliminarTarea={eliminarTarea} />} />
            <Route path="/tareas/crear" element={<TareaForm agregarTarea={agregarTarea} />} />
            <Route path="/resumen" element={<ResumenSemanal />} /> {}
          </Routes>
        </Container>
        <Footer />
      </Router>
    );
};

export default App;
