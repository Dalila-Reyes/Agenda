import React from 'react';

const ListaTareas = ({ tareas, actualizarTarea, eliminarTarea }) => {
    return (
        <ul>
            {tareas.map(tarea => (
                <li key={tarea.id}>
                    <h3>{tarea.titulo}</h3>
                    <p>{tarea.descripcion}</p>
                    <p>{tarea.fecha}</p>
                    <p>{tarea.estado}</p>
                    <button onClick={() => actualizarTarea(tarea.id, { ...tarea, estado: 'completada' })}>Completar</button>
                    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ListaTareas;
