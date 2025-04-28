// Importación de paquetes y archivos

import * as seventos from '../services/eventos.service.js'



// Array de los Eventos

const arrEventoJson={
    "arreglo": [
        {
            "IdEvento" : 3,
            "Fecha" : "2025-10-12",
            "Horario" : "22:30",
            "IdLocal" : 7,
            "IdArtista" : 8,
            "IdCategoria" : 2,
        },
        {
            "IdEvento" : 4,
            "Fecha" : "2025-05-06",
            "Horario" : "20:30",
            "IdLocal" : 10,
            "IdArtista" : 10,
            "IdCategoria" : 2,
        },
        {
            "IdEvento" : 5,
            "Fecha" : "2025-10-06",
            "Horario" : "21:30",
            "IdLocal" : 10,
            "IdArtista" : 9,
            "IdCategoria" : 2,
        },
        {
            "IdEvento" : 7,
            "Fecha" : "2025-10-10",
            "Horario" : "20:30",
            "IdLocal" : 8,
            "IdArtista" : 8,
            "IdCategoria" : 2,
        }
    ]}

// Funciones exportables

export const getAll = function (req, res) {
    res.send(arrEventoJson.arreglo)
}

export const getById = function (req, res) {
    res.send(arrEventoJson.arreglo[req.params.id])
}

export const create = function(req, res){

    const objEvento = req.body
    arrEventoJson.arreglo.push(objEvento)
    res.send(objEvento)
}

