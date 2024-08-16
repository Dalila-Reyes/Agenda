// src/components/ResumenSemanal.jsx
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TareaService from '../services/TareaService';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResumenSemanal = () => {
    const [datos, setDatos] = useState({ pendientes: 0, completadas: 0 });

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await TareaService.obtenerTareas();
                const tareas = response.data;
                
                const pendientes = tareas.filter(tarea => tarea.estado === 'pendiente').length;
                const completadas = tareas.filter(tarea => tarea.estado === 'completada').length;

                setDatos({ pendientes, completadas });
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };

        obtenerDatos();
    }, []);

    const data = {
        labels: ['Pendientes', 'Completadas'],
        datasets: [
            {
                data: [datos.pendientes, datos.completadas],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 4,
            }
        ]
    };

    return (
        <div className="my-4">
            <h2>Resumen de Tareas</h2>
            <Pie data={data} />
        </div>
    );
};

export default ResumenSemanal;
