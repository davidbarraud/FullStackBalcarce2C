import { Movie } from '../types/Movie'

export interface IFetcher {
    get(url: string, params?: Record<string, string | number>): Promise<Movie[] | Movie>
}
