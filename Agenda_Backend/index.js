const express = require('express');
const cors = require('cors');
const app = express();
const tareasRoutes = require('./routes/tareas');
const db = require('./config/db');

// Configuración
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/tareas', tareasRoutes);

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
