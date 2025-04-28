
import * as spedidos from '../services/pedidos.service.js'

// Funciones exportables

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método getAll

export const getAll = function (req, res) {

    console.log("------------controller------------");

    spedidos.getAll()
    .then( pedidos =>{

            console.log("....despues de spedidos.getAll()");

            res.json(pedidos || [] )

    })
    .catch(
        err => {
            res.status(500).json({"error":"Error obteniendo registros"});
        }
    )
    /*res.send(arrEventoJson.arreglo)*/
}


// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método getById

export const getById = function (req, res) {
    console.log("------------controller------------");

    seventos.getById(req.params.id)
    .then( objEventos =>{

            console.log("....despues de seventos.getById()");

            res.json(objEventos || [] )

    })
    .catch(
        err => {
            res.status(500).json({"error":"Error obteniendo registros"});
        }
    )

    /*res.send(arrEventoJson.arreglo[req.params.id])*/
}

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método create

export const create = function(req, res){

    const objEvento = req.body
    console.log(objEvento)
    seventos.create(objEvento)
    .then( idEvento =>{

        console.log("....despues de seventos.create()");
        res.json({"IdEvento":idEvento});

        })
    .catch(
        err => {
        res.status(500).json({"error":"Error ingresando registros"});
    }
)

    //arrEventoJson.arreglo.push(objEvento)
    /*res.send(objEvento)*/
}

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método update

export const update = function(req, res){

    const objEvento = req.body
    console.log(objEvento)
    seventos.update(req.params.id,objEvento)
    .then( NumRegistros =>{

        console.log("....despues de seventos.update()");
        res.json({"NumeroRegistrosModificados":NumRegistros});

        })
    .catch(
        err => {
        res.status(500).json({"error":"Error actualizando registros"});
    }
)
}

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método delete


export const deleteRow = function(req, res){

    seventos.deleteRow('false',req.params.id)
    .then( NumRegistros =>{

        console.log("....despues de seventos.deleteRow()");
        res.json({"NumeroRegistrosModificados":NumRegistros});

        })
    .catch(
        err => {
        res.status(500).json({"error":"Error eliminando registros"});
    }
)
}