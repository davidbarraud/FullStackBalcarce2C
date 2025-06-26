//SE importa Router de Express para que defina las rutas o puntos de entrada de la API
// También se importan los controladores que van a ser las funciones 

import { Router } from "express";
import { MovieController } from "../controllers/movies.controller";

const router = Router();
const moviesController =  new MovieController();

router.get("", moviesController.get);
router.post("", moviesController.post);
router.put("/:id", moviesController.update);
router.delete("/id", moviesController.delete);
router.get("/:id", moviesController.getById);
router.get("/:titulo", moviesController.getByParams);
router.get("/", moviesController.getByQuery);
router.post("/", moviesController.getByBody);
// se exporta el paquete de Rutas
export default router; 