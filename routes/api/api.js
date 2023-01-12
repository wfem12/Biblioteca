const express = require('express');
const router = express.Router();
const v1Router = require('./v1/v1');

router.use('/v1', v1Router);


//  ESTE CODIGO SIMPLEMENTE ENVIA UN DATO
// router.get('/', function(req, res){
//     res.send('Hola mundo');
// });

module.exports = router;