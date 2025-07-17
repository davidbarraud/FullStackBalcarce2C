import { MovieService } from '../dist/services/MovieService.js';
import { InMemoryFetcher } from '../dist/services/InMemoryFetcher.js';

const fetcher = new InMemoryFetcher();
const movieService = new MovieService(fetcher);
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const movies = await movieService.getAllMovies();
        const container = document.getElementById('movies-list');
        movies.forEach(movie => {
            const card = document.createElement('article');
            card.classList.add("card", "col-12", "col-md-3");
            card.style.minWidth = '18rem';
            card.style.maxWidth = '80%';
            card.innerHTML = `
  <img src="${movie.poster}" class="card-img-top mt-2 rounded rounded-2" alt="${movie.title}">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.year}</p>
    <p class="card-text">${movie.director}</p>
    <a href="#" class="btn btn-info">More Info</a>
  </div>`;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar películas:', error);
    }
});
