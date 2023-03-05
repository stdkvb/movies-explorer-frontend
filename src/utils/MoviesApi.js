import { MOVIES_URL } from './constants';

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  static errorHandle(response) {
    return response.ok ? response.json() : Promise.reject(new Error(`Ошибка № ${response.status} – ${response.ok}`));
  }

  getMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(MoviesApi.errorHandle);
  }
}

const moviesApi = new MoviesApi(MOVIES_URL);

export default moviesApi;
