// Este es el menú de opciones
// Importación de paquetes

import express from 'express' 

import reventos from './routes/eventos.routes.js'
import rpedidos from './routes/pedidos.routes.js'


// Instancias

const router = express.Router()

// Redireccion de rutas

router.use("/eventos",reventos);
router.use("/pedidos",rpedidos);



// Exportar el router

export default router;