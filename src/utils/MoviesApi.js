class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok && res.json() || Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(this._baseUrl)
      .then(this._checkResponse);
  }

}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});