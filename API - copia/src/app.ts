//Importando las dependencias
import express from "express";
import  cors  from "cors";
import axios from "axios";

// se crea la constante app que es del tipo Express
const app = express();

// se le indica a la constante que use Cors
app.use(cors());

// se le indica a la constante que escuche en el puerto 3000
app.listen(3000, () =>{
    console.log("Server running on port 3000");
});


app.route("/test").get((req, res) => {
    res.send("Hello World!");
});

app.route("/test/:id").get((req, res) => {
    const id = req.params.id;
    res.send(`El parámetro recibido es: ${id}`);
});


app.route("/clients").get(async (req, res) => {

    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/2");
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error);
        
    }
   
});


app.route("/character/:id").get(async (req, res) => {
   try{
     const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
     res.json(response.data)
   } catch (error) {
       res.status(500).send(error)
   } 
});

app.route("/chuck/:category").get(async (req, res) => {
   try{
     const response = await axios.get(`https://api.chucknorris.io/jokes/random?category/${req.params.category}`)
     res.json(response.data.value)
   } catch (error) {
       res.status(500).send(error)
   } 
});
