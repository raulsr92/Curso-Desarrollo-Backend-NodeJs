
//Importar pool de conexiones

import pool from '../config/db.js'

// Crear funciones

export const getAll = function () {
 
    console.log("----------------------Service--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 'select E.Id_Evento,E.Nombre_Evento, E.Fecha_Evento,C.Nom_Categoria, L.Nom_Local, L.Capacidad_Local from tb_evento E inner join tb_categoria C on E.Id_Cate = C.Id_Cate inner join tb_local L on E.Id_Local = L.Id_Local order by E.Id_Evento',
                    (err, results, fields)=>{
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

export const getById = function (Id_Evento) {
 
    console.log("----------------------Service Insertar nuevo Evento--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 'select E.Id_Evento,E.Nombre_Evento, E.Fecha_Evento,C.Nom_Categoria, L.Nom_Local, L.Capacidad_Local from tb_evento E inner join tb_categoria C on E.Id_Cate = C.Id_Cate inner join tb_local L on E.Id_Local = L.Id_Local where E.Id_Evento=?  order by E.Id_Evento',
                    [Id_Evento],(err, results, fields)=>{
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


export const create = function (objEvento) {
 
    console.log("----------------------Service Insertar nuevo Evento--------------------")
    
    return new Promise( (resolve, reject) =>{
        pool.query( 'INSERT INTO tb_evento (Nombre_Evento,Fecha_Evento,Hora_Evento, Id_Cate, Id_Local) VALUES (?, ?,?, ?,?)',
                    [objEvento.Nombre_Evento, objEvento.Fecha_Evento,objEvento.Hora_Evento,objEvento.Id_Cate,objEvento.Id_Local],(err, results, fields)=>{
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
