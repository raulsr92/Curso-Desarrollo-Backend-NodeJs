
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

