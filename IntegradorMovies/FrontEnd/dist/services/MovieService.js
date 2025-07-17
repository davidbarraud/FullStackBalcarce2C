export class MovieService {
    constructor(fetcher) {
        this.fetcher = fetcher;
        this.baseUrl = 'movies';
    }
    async getAllMovies() {
        return await this.fetcher.get(this.baseUrl);
    }
    async getMovieById(id) {
        return await this.fetcher.get(`${this.baseUrl}/${id}`);
    }
    async getMoviesByFilters(filters) {
        return await this.fetcher.get(this.baseUrl, filters);
    }
}
//# sourceMappingURL=MovieService.js.map