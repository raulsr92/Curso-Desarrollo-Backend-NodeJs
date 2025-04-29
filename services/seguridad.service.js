//Importar pool de conexiones

import pool from '../config/db.js'

// Crear funciones

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método Logueo

export const logueo = function (objLogin) {
 
    console.log("----------------------Servicio de Logueo--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 'select * from tb_usuario where correo_usuario = ? and pass_usuario = ? and fingreso_usuario = 1',
                    [objLogin.correo_usuario,objLogin.pass_usuario],(err, results, fields)=>{
            console.log(results);
            if(err){
                reject(err)
            } else{
                resolve(results[0])
            }
        })
    }
    )
}