//Importar pool de conexiones

import pool from '../config/db.js'

// Crear funciones

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método getAll

export const getAll = function () {
 
    console.log("----------------------Service Getting all usuers--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 
            `
            select 
	            id_usuario,
	            nom_usuario,
	            ape_usuario,
	            correo_usuario,
	            cod_telef_usuario,
	            telef_usuario,
	        case 
		        when Activo = 1 then 'Usuario Activo'
		        when Activo = 0 then 'Usuario Inactivo'
	        end as Activo

            from tb_usuario
            `,(err, results, fields)=>{
            console.log(results);
            if(err){
                reject(err)
            } else{
                resolve(results)
            }
        })
    }
    )
}

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método getById

export const getById = function (Id_Usuario) {
 
    console.log("----------------------Service para Listar por ID--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 
            ` select 
                id_usuario,
                nom_usuario,
                ape_usuario,
                correo_usuario,
                cod_telef_usuario,
                telef_usuario,  
                case 
                    when Activo = 1 then 'Usuario Activo'
                    when Activo = 0 then 'Usuario Inactivo'
                end as Activo
                from
                    tb_usuario where id_usuario = ?      
            
            `,[Id_Usuario],(err, results, fields)=>{
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