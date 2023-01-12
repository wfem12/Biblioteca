const express = require('express');
const { getAll, Add } = require('../../../../controller/libroController');
const conexion = require('../../../../database/db');
const router = express.Router();
// const { getAll } = require('../../../../controller/libroController');

router.get('/all', getAll);
router.post('/add', Add);

// const conexion  = require('../../../../database/db'); //CONEXION

// const Libro = require('../../../../controller/libroController');
// const LibroModel = new Libro();


// METODO GET
// router.get('/all', LibroModel.getAll);

//

// router.get('/all', (req, res)=> {
//     conexion.query('SELECT * FROM bibliotecabd.libros;', (error, result)=> {
//         if (error) {
//             throw error;
//         } else {
//             console.log(result);
//             res.send(result)
//         }
//     })
// })

module.exports = router;