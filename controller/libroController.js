// const express = require('express');
// const route = express.Router();
const conexion = require('../database/db'); //CONEXION

controller = {};

controller.getAll = async (req, res) => {
    conexion.query('SELECT * FROM bibliotecabd.libros;', (error, result)=> {
        if (error) {
            throw error;
        } else {
            console.log(result);
            res.send(result)
        }
    })
}

controller.Add = async (req, res) => {
    const {idLibro, nombreLibro} = req.body;
    conexion.query('INSERT INTO Libros(idLibro, nombreLibro) VALUES(?, ?)', [idLibro, nombreLibro], (error, result) => {
        if (error) {
            throw error;
        } else {
            console.log(result);
            res.send(result);
        }
    });
}


// conexion.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }


// class Libro {

//     // OBTENER TODOS LOS DATOS
//     getAll (req, res) {
//         conexion.query('SELECT * FROM bibliotecabd.libros;', (error, result)=> {
//             if (error) {
//                 throw error;
//             } else {
//                 console.log(result);
//                 res.send(result)
//             }
//         })
//     }
// }



module.exports = controller;