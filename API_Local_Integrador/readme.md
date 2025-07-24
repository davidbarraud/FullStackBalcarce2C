# 📽️ Aplicación para Leer APIs Locales

Una API REST construida con TypeScript, Express y Node.js que simula el consumo de datos desde un archivo JSON local como si fuera una base de datos. Ideal para proyectos integradores o pruebas sin conexión a una base de datos real.

---

## 📁 Estructura del Proyecto

API_Local_Integrador/
└── src/
├── app.ts
├── controllers/
│ └── movies.controller.ts
├── repositories/
│ ├── movies.json
│ └── movies.repository.ts
├── routes/
│ └── movies.routes.ts
└── services/
└── movies.services.ts


---

## 🚀 Descripción de Archivos Principales

### `app.ts`  
📌 **Rol**: Punto de entrada de la aplicación.

🔧 **Funcionalidad principal**:
- Configura Express.
- Habilita CORS y manejo de JSON.
- Monta las rutas de películas.
- Inicia el servidor en el puerto `3000`.

```ts
const app = express();
app.use(cors());
app.use(express.json());
app.use("/movies", moviesRouter);
app.listen(3000);

routes/movies.routes.ts
📌 Rol: Define las rutas disponibles en la API.

📍 Rutas disponibles:

GET /movies → Todas las películas.

GET /movies/id/:id → Película por ID.

GET /movies/title/:titulo → Película por título.

GET /movies/search?director=Nolan → Película filtrada por director.

controllers/movies.controller.ts
📌 Rol: Controlador que recibe las solicitudes y llama al servicio correspondiente.

🔄 Responsabilidades:

Recibir params o query del request.

Invocar métodos del servicio.

Devolver respuesta al cliente.

services/movies.services.ts
📌 Rol: Lógica de negocio. Interactúa con el repositorio para obtener datos.

🔧 Responsabilidades:

Obtener todas las películas.

Buscar por ID, título o director.

Delegar la lectura al repositorio.

repositories/movies.repository.ts
📌 Rol: Encargado de acceder al archivo movies.json y devolver datos en memoria.

🔍 Métodos clave:

getAll() → Devuelve todas las películas.

getById(id) → Busca una película por su ID.

getByQuery(query) → Filtra películas por atributos como el director.

repositories/movies.json
📌 Rol: Archivo de datos simulado (mock). Funciona como reemplazo de una base de datos.

📄 Ejemplo de contenido:

[
  {
    "id": 1,
    "titulo": "Inception",
    "director": "Christopher Nolan"
  }
]

🔁 Flujo de Datos
🧑 Cliente (Postman o Navegador)
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

🧪 Ejemplos de Uso en Postman
Método	URL	Descripción
GET	http://localhost:3000/movies	Obtener todas las películas
GET	http://localhost:3000/movies/id/1	Buscar película por ID
GET	http://localhost:3000/movies/title/Inception	Buscar por título
GET	http://localhost:3000/movies/search?director=Nolan	Buscar por director

✅ Requisitos Previos
Node.js instalado

TypeScript configurado

Dependencias instaladas (npm install)

▶️ Cómo Ejecutar
Clona este repositorio.

Instala las dependencias con npm install.

Ejecuta el servidor con npx ts-node src/app.ts.

Prueba la API en Postman o navegador.

🧑‍💻 Autor
Desarrollado como parte de un proyecto integrador para practicar arquitectura en capas con TypeScript, Express y JSON como base de datos simulada.