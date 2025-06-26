  import { Request, Response } from "express";
  import axios from "axios";
  import { MovieService } from "../services/movies.services";
  
export class MovieController{
    constructor(private moviesService = new MovieService()){

}


    get = ( req: Request, res: Response) =>{
        res.send(this.moviesService.get());
    }
      
  
    getById = (req: Request, res: Response) =>{
        const id = req.params.id;
          res.json({message: "Devuelvo el ID"})
      }
  
    getByParams = (req: Request, res: Response) =>{
        const titulo = req.params.titulo;
          res.json({message: "Devuelvo el título"})
      }

    getByQuery = (req: Request, res: Response) =>{
            const director = req.query.director;
            res.json({message: "Query de director"})
        }
    

    postByBody = (req: Request, res: Response) =>{
        const body = req.body;
        console.log(body);
        res.status(200).json(body);
          res.json({message: "Imprime el Body"})
      }
  
    update = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }
  
    delete = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }

    post = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }
  
  };