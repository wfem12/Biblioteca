const express = require('express');
const router = express.Router();

// LAS RUTAS DE LOS ARCHIVOS A UTILZAR
const LibrosRoutes = require('./Libro/libro');

router.use('/libro', LibrosRoutes);

module.exports = router;