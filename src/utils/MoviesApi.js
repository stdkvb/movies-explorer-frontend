import { BASE_URL } from './constants';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  static errorHandle(response) {
    return response.ok ? response.json() : Promise.reject(new Error(`Ошибка № ${response.status} – ${response.ok}`));
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(MoviesApi.errorHandle);
  }
}

const moviesApi = new MoviesApi(BASE_URL);

export default moviesApi;
