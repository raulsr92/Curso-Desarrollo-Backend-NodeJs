// Importación de paquetes y archivos

import * as susuarios from '../services/usuarios.service.js'

// Funciones exportables

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método getAll

export const getAll = function (req, res) {

    console.log("------------controller------------");
    susuarios.getAll()
    .then( usuarios =>{
            console.log("....despues de susuarios.getAll()");
            res.json(usuarios || [] )
    })
    .catch(
        err => {
            res.status(500).json({"error":"Error obteniendo registros"});
        }
    )
}