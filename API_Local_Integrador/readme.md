# Aplicación para leer APIs locales

## Estructura General
API_Local_Integrador/
│
└── src/
    ├── app.ts
    ├── controllers/
    │   └── movies.controller.ts
    ├── repositories/
    │   ├── movies.json
    │   └── movies.repository.ts
    ├── routes/
    │   └── movies.routes.ts
    └── services/
        └── movies.services.ts

📄 app.ts
📌 Rol:
Es el punto de entrada de tu aplicación. Configura Express, CORS, JSON, y monta las rutas.

🔍 Partes clave:

const app = express();                  // Crea la app
app.use(cors());                        // Permite peticiones desde otros orígenes
app.use(express.json());                // Permite recibir JSON en POST/PUT
app.use("/movies", moviesRouter);       // Usa el archivo de rutas
app.listen(3000);                       // Arranca el servidor en el puerto 3000

📄 routes/movies.routes.ts
📌 Rol:
Define las rutas de la API. Es donde configurás las URL que puede usar el cliente (Postman, navegador, etc.).

🔍 Partes clave:
router.get("/", moviesController.get);                // /movies → todos
router.get("/id/:id", moviesController.getById);      // /movies/id/1 → por ID
router.get("/title/:titulo", moviesController.getByParams); // /movies/title/Matrix → por título
router.get("/search", moviesController.getByQuery);   // /movies/search?director=Nolan → filtro


📄 controllers/movies.controller.ts
📌 Rol:
Actúa como intermediario entre la ruta y el servicio. Recibe los datos de la URL o query, y llama a MoviesService.

🔍 Partes clave:
constructor(private moviesService = new MoviesService()) {} // Usa el servicio

get = (req, res) => res.send(this.moviesService.get());

getById = (req, res) => {
    const id = req.params.id;
    const movie = this.moviesService.getById(id);
    movie ? res.json(movie) : res.status(404).json({ error: "No encontrado" });
}

📄 services/movies.services.ts
📌 Rol:
Contiene la lógica de negocio. Se encarga de obtener los datos desde el repositorio y devolverlos al controlador.

🔍 Partes clave:
private repo = new MoviesRepository(); // Usa el repositorio

get() {
    return this.repo.getAll(); // Llama al método del repositorio
}

getByQuery(query) {
    return this.repo.getByQuery(query); // Filtra por director u otro campo
}

📄 repositories/movies.repository.ts
📌 Rol:
Este archivo se encarga de leer el archivo movies.json y devolver la información en memoria. Es la "capa de datos".

🔍 Partes clave:
const dataPath = path.join(__dirname, './movies.json'); // Ruta del archivo JSON

constructor() {
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    this.movies = JSON.parse(fileContent); // Carga los datos en memoria
}

getAll() {
    return this.movies;
}

getById(id: string) {
    return this.movies.find(movie => movie.id.toString() === id);
}

📄 repositories/movies.json
📌 Rol:
Contiene los datos de las películas en formato JSON. Es el "reemplazo de la base de datos".
[
  {
    "id": 1,
    "titulo": "Inception",
    "director": "Christopher Nolan"
  },
  ...
]

🧠 Resumen de flujo
🧑 Cliente (Postman)
   ⬇
🔗 Rutas (movies.routes.ts)
   ⬇
🎮 Controlador (movies.controller.ts)
   ⬇
⚙️ Servicio (movies.services.ts)
   ⬇
📁 Repositorio (movies.repository.ts)
   ⬇
📄 Archivo JSON (movies.json)


🧪 Ejemplos en Postman
| Método | URL                                                  | Acción              |
| ------ | ---------------------------------------------------- | ------------------- |
| GET    | `http://localhost:3000/movies`                       | Obtener todos       |
| GET    | `http://localhost:3000/movies/1`                  | Buscar por ID       |
| GET    | `http://localhost:3000/movies/titulo/Inception`       | Buscar por título   |
| GET    | `http://localhost:3000/movies/search?director=Nolan` | Buscar por director |
