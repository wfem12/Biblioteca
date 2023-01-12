// Librerias para la conexion de base de datos
const mysql = require('mysql');

// Conexion
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'bibliotecabd',
    user: 'root',
    password: '1234',
});

// En caso exista un error
conexion.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('CONEXION EXITOSA');
    }
});

module.exports = conexion;
