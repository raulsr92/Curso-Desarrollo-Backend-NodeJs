
import * as sseguridad from '../services/seguridad.service.js'

// Funciones exportables

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método Logueo

export const logueo = function(req, res){

    console.log("------------controller------------");

    const objLogin = req.body
    console.log(objLogin)
    sseguridad.logueo(objLogin)
    .then( result =>{

        console.log("....despues de sseguridad.logueo()");
        res.json(result || []);


        })
    .catch(
        err => {
        res.status(500).json({"error":"Error logueandose"});
    }
)}