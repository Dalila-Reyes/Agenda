const db = require('../config/db');

exports.obtenerTareas = (req, res) => {
    const sql = 'SELECT * FROM tareas';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.crearTarea = (req, res) => {
    const { titulo, descripcion, fecha } = req.body;
    const sql = 'INSERT INTO tareas (titulo, descripcion, fecha) VALUES (?, ?, ?)';
    db.query(sql, [titulo, descripcion, fecha], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, titulo, descripcion, fecha });
    });
};

exports.actualizarTarea = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fecha, estado } = req.body;
    const sql = 'UPDATE tareas SET titulo = ?, descripcion = ?, fecha = ?, estado = ? WHERE id = ?';
    db.query(sql, [titulo, descripcion, fecha, estado, id], (err) => {
        if (err) throw err;
        res.json({ id, titulo, descripcion, fecha, estado });
    });
};

exports.eliminarTarea = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM tareas WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Tarea eliminada' });
    });
};
