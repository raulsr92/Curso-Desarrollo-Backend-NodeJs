import express from 'express'

import * as cseguridad from '../controllers/seguridad.controller.js'

// Instancias

const router = express.Router();

// Rutas

router.get("/",cseguridad.logueo);

export default router;