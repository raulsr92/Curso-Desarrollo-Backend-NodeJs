console.log("Hola Mundo, soy Raúl")

// Importación de paquetes

import express from 'express'
import bodyParser from 'body-parser'
import api from './routes.js'

// Instancias


const app = express();

// Configuraciones y redireccioens

app.use(bodyParser.json());
app.use("/api/v1", api)


/*
// GET Request

app.get( "/eventos", (req, res) =>{

    res.send(arrEventoJson.arreglo)

} );


app.get( "/eventos/:id", function(req, res){

    console.log(`Accediendo al elemento en la posición: ${req.params.id}`);

    res.send(arrEventoJson.arreglo[req.params.id])
})


// POST Request

app.post("/eventos", function (req,res) {

    const objEvento = req.body

    res.send(objEvento)

    console.log(objEvento)

    // Agregar a array

    arrEventoJson.arreglo.push(objEvento)

})

*/


// Inicializar el servidor

app.listen("4001", ()=>{
    console.log("Listening on "+ 4001)
})
