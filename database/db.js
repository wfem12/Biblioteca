// Librerias para la conexion de base de datos
const mysql = require('mysql');

// Conexion
const conexion = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD ,
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
