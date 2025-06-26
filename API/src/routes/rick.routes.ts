//SE importa Router de Express para que defina las rutas o puntos de entrada de la API
// También se importan los controladores que van a ser las funciones 

import { Router } from "express";
import { RickController } from "../controllers/rick.controller";

const routerRick = Router();
const rickController =  new RickController();

routerRick.get("/", rickController.get);
routerRick.get("/:id", rickController.getById);
routerRick.post("/", rickController.create);
routerRick.put("/:id", rickController.update);
routerRick.delete("/", rickController.delete);

// se exporta el paquete de Rutas
export default routerRick; 