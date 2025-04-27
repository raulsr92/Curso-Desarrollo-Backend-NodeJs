// Importación de paquetes

import express from 'express' 

import reventos from './routes/eventos.routes.js'

// Instancias

const router = express.Router()

// Redireccion de rutas

router.use("/eventos",reventos);


// Exportar el router

export default router;