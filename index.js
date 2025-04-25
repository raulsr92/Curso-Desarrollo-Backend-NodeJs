console.log("Hola Mundo, soy Raúl")

// Importación de paquetes

import express from 'express'
const app = express();


// Arreglo de eventos

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


// GET Request

app.get( "/eventos", (req, res) =>{

    res.send(arrEventoJson.arreglo)

} );

// POST Request

app.get( "/eventos/:id", function(req, res){

    console.log(`Accediendo al elemento en la posición: ${req.params.id}`);

    res.send(arrEventoJson.arreglo[req.params.id])
})


// Inicializar el servidor

app.listen("4001", ()=>{
    console.log("Listening on "+ 4001)
})
