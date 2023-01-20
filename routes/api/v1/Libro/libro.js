const express = require('express');
const { getAll, Add, GetById, GetByName, Update, Delete } = require('../../../../controller/libroController');
const router = express.Router();

// ROUTES
router.get('/all', getAll); //OBTENER LOS DATOS
router.post('/add', Add); // AGREGAR DATOS
// OBTENER DATOS
router.get('/ById/:id', GetById); //ENCONTRAR EL DATO QUE TENGA EL ID
router.get('/ByName/:name', GetByName); // ENCONTRAR EL DATO QUE TENGA EL NOMBRE
router.put('/update/:id', Update); //ACTUALIZAR EL DATOS
router.delete('/delete/:id', Delete);


module.exports = router;