import { BASE_URL } from './constants';

class Api {
  constructor(configuration) {
    this._url = configuration.url;
    this._headers = configuration.headers;
  }

  static handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(response);
  }

  createUser(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    })
      .then(Api.handleResponse);
  }

  loginUser(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
      .then(Api.handleResponse);
  }

  logoutUser() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
      .then(Api.handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(Api.handleResponse);
  }

  updateUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email }),
    })
      .then(Api.handleResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(Api.handleResponse);
  }

  createMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then(Api.handleResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(Api.handleResponse);
  }
}

const api = new Api({
  url: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
