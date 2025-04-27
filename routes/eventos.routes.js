// Importación de paquetes

import express from 'express'

import * as ceventos from '../controllers/eventos.controller.js'

// Instancias

const router = express.Router();

// Rutas

router.get("/",ceventos.getAll);
router.get("/:id",ceventos.getById);
router.get("/", ceventos.create)

export default router;
