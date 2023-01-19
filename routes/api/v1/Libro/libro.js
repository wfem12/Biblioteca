const express = require('express');
const { getAll, Add, GetById, GetByName } = require('../../../../controller/libroController');
const router = express.Router();

// ROUTES
router.get('/all', getAll);
router.post('/add', Add);
// OBTENER DATOS
router.get('/ById/:id', GetById);
router.get('/ByName/:name', GetByName);


module.exports = router;