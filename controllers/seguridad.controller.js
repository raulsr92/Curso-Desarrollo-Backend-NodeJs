
import * as sseguridad from '../services/seguridad.service.js'
import * as auth       from '../config/auth.js'

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

// ⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩⟨~⟩  Método Login

export const login = function (req, res) {

    console.log("------------controller------------");

    const reqUsuario = req.body;
    console.log(reqUsuario)
    
    sseguridad.login(reqUsuario)
    .then((usuarios) => {
        //Validar que exista usuario
        if (usuarios[0]) {

            //Validar que la contraseña seal a misma a la almacenada en BD

            if (usuarios[0].pass_usuario == reqUsuario.pass_usuario) {

                let token = auth.generateToken(usuarios[0])
                let refreshToken = auth.generateRefreshToken(usuarios[0])

                console.log(`Token: ${token}`)
                console.log(`RefreshToken: ${refreshToken}`)

                // Respuesta al cliente
                res.json(
                    {
                        token,
                        refreshToken,
                        "user":{
                            "id_persona": usuarios[0].id_persona,
                            "correo_usuario": usuarios[0].correo_usuario,
                            "rol_usuario": usuarios[0].rol_usuario,
                        }
                    }
                )
            } else {
                res.status(403).json({"error":"Acceso no autorizado"})
            }

        } else{
            res.status(403).json({"error":"Acceso no autorizado"})
        }
      }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({"error":"Error obteniendo registros"});
    });
}

