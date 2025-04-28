// Importación de paquetes

import express from 'express'

import * as ceventos from '../controllers/eventos.controller.js'

// Instancias

const router = express.Router();

// Rutas

router.get("/",ceventos.getAll);
router.get("/:id",ceventos.getById);
router.post("/", ceventos.create)
router.put("/:id",ceventos.update)
router.delete("/:id",ceventos.deleteRow)

export default router;
