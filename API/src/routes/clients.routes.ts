//SE importa Router de Express para que defina las rutas o puntos de entrada de la API
// También se importan los controladores que van a ser las funciones 

import { Router } from "express";
import { ClientController } from "../controllers/clients.controller";

const router = Router();
const clientController =  new ClientController();

router.get("/", clientController.get);
router.get("/:id", clientController.getById);
router.post("/", clientController.create);
router.put("/:id", clientController.update);
router.delete("/", clientController.delete);

// se exporta el paquete de Rutas
export default router; 