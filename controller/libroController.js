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

module.exports = controller;