// const express = require('express');
// const route = express.Router();
const conexion = require('../database/db'); //CONEXION

controller = {};

// ******************************************************************************************************************************* //
// HACER UN GET
controller.getAll = async (req, res) => {
    conexion.query('SELECT * FROM bibliotecabd.libros', (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
}
// ******************************************************************************************************************************* //

// HACER UN POST
controller.Add = async (req, res) => {
    //IMPORTANTE: TIENE QUE SER EL MISMO NOMBRE QUE ESTA EN LA BASE DE DATOS
    //HACERLO EN EL APARTADO DE FORM-ENCODE O JSON
    const { idLibro, nombreLibro } = req.body;
    conexion.query('INSERT INTO Libros(idLibro, nombreLibro) VALUES(?, ?)', [idLibro, nombreLibro], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            res.send(result);
        }
    });
}
// ******************************************************************************************************************************* //

// HACER UN GET FIND (OBTENER UN SOLO DATO)
controller.GetById = async (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM bibliotecabd.libros WHERE idLibro = ?', [id], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // CONDICION SI EL ID NO EXISTE
            if (result == "") {
                res.send(`ERROR... El Id #${id} no existe, por favor intente nuevamente.`);
            } else {
                console.log(result);
                res.send(result);
            }
        }
    });
}


controller.GetByName = async (req, res) => {
    const nombre = req.params.name;
    conexion.query('SELECT * FROM bibliotecabd.libros WHERE nombreLibro = ?', [nombre], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // CONDICION SI EL NOMBRE NO EXISTE
            if (result == "") {
                res.send(`ERROR... El ${nombre} no existe o fue ingresado de manera incorrecta, por favor intente nuevamente.`);
            } else {
                console.log(result);
                res.send(result);
            }
        }
    });
}

// ******************************************************************************************************************************* //
// HACER UN PUT(UPDATE)
controller.Update = async (req, res) => {
    const { id } = req.params;
    const { nombreLibro } = req.body;
    conexion.query('UPDATE libros SET nombreLibro = ? WHERE idLibro = ?', [nombreLibro, id], (error, result) => {
        // CONDICION QUE SI NO ACTUALIZO TIRE UN MENSAJE QUE DIGA QUE NO FUE RECIBIDO LA PETICION
        if (result.affectedRows === 0) {
            console.log("NO RECIBIDO");
            res.status(404).json({
                status: "Failed",
                message: `El id ${id} no fue encontrado`,
            });
        } else {
            if (error) {
                console.log(error);
            }
            console.log(result);
            res.status(200).json({
                status: 'Actualizado',
                message: `id del libro Actualizado: ${id}` ,

            })
        }
    });

}

// conexion.query('UPDATE Libros SET nombreLibro = ? WHERE idLibro = ?', [nombreLibro, id], (error, result) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(result);
//     res.send(result);
// })
// const { id } = req.params;
// const { nombreLibro } = req.body;
// ******************************************************************************************************************************* //
// HACER UN DELETE
controller.Delete = async (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM bibliotecabd.libros WHERE idLibro = ?', [id], (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(result);
        res.send(result);
    })
}

module.exports = controller;