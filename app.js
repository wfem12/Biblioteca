var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Librerias para la conexion de base de datos
// var mysql = require('mysql');

// Conexion
// var conexion = mysql.createConnection({
//     host: 'localhost',
//     database: 'bibliotecabd',
//     user: 'root',
//     password: '1234',
// });

// En caso exista un error
// conexion.connect(function(error){
//     if (error) {
//         throw error;
//     } else {
//         console.log('CONEXION EXITOSA');
//     }
// });

//  LLAMADA GET
// conexion.query('SELECT * FROM bibliotecabd.libros;', function(error, result){
//     if (error) {
//         console.error('Error en la conexion en: ' +error);
//     }
//     console.log(result);
// });

// conexion.end();



// 

// ARCHIVOS A LLAMAR
var apiRouter = require('./routes/api/api');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ARCHIVOS A EJECUTAR
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

module.exports = app;
