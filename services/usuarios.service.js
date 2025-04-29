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

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método create

export const create = function (objUser) {
 
    console.log("----------------------Service Insertar nuevo Evento--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 
            `
            INSERT INTO tb_usuario (nom_usuario, ape_usuario, correo_usuario, pass_usuario, tipo_doc_usuario,nro_doc_usuario, pais_usuario,ubigeo,cod_telef_usuario,telef_usuario,fingreso_usuario,num_errores_usuario,Activo)
			VALUES (?,?,?,?,?,?,?,?,?,?,1,0,1)
            `,[objUser.nom_usuario,objUser.ape_usuario,objUser.correo_usuario,objUser.pass_usuario,objUser.tipo_doc_usuario,objUser.nro_doc_usuario,objUser.pais_usuario,objUser.ubigeo,objUser.cod_telef_usuario,objUser.telef_usuario],(err, results, fields)=>{
            console.log(results);
            if(err){
                reject(err)
            } else{
                resolve(results.insertId)
            }
        })
    }
    )
}