  import { Request, Response } from "express";
  import axios from "axios";
  
  export class RickController{
      get = async ( req: Request, res: Response) =>{
          try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/");
        res.json(response.data);
        } catch (error) {
        res.status(500).send(error);
        
    }
      }
  
      getById = async (req: Request, res: Response) =>{
        try{
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
            res.json(response.data)
        } catch (error) {
            res.status(500).send(error)
        } 
      }
  
      create = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }
  
      update = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }
  
      delete = (req: Request, res: Response) =>{
          res.json({message: "Hola desde el Controlador ID"})
      }
  
  };