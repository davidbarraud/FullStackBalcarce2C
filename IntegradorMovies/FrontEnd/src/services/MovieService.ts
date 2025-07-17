import { IFetcher } from '../interfaces/IFetcher'
import { Movie } from '../types/Movie'


export class MovieService {
    private baseUrl = 'movies'; // simulamos la ruta base

    constructor(private readonly fetcher: IFetcher) { }

    async getAllMovies(): Promise<Movie[]> {
        return await this.fetcher.get(this.baseUrl) as Movie[]
    }

    async getMovieById(id: string): Promise<Movie> {
        return await this.fetcher.get(`${this.baseUrl}/${id}`) as Movie
    }

    async getMoviesByFilters(filters: Partial<Record<'genre' | 'year' | 'title', string | number>>): Promise<Movie[]> {
        return await this.fetcher.get(this.baseUrl, filters) as Movie[]
    }
}
