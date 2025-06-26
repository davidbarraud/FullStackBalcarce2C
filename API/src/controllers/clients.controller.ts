import { Request, Response } from "express";

export class ClientController{
    get = (req: Request, res: Response) =>{
        res.json({message: "Hola desde el Controlador"})
    }

    getById = (req: Request, res: Response) =>{
        res.json({message: "Hola desde el Controlador ID"})
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