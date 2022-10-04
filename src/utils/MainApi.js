// export const BASE_URL = 'https://api.eurosar2movies.nomoredomains.sbs';
export const BASE_URL = 'http://localhost:3005';


/**
 * Проверяем ответ с сервера на ошибки
 * @param res
 * @returns {Promise<never>|*}
 * @private
 */
const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// ------------------------------- Функции авторизации пользователя
/**
 * Функция регистрации
 * @param name {string}
 * @param email {string}
 * @param password {string}
 * @returns {Promise<Response>}
 */
export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  })
    .then(_checkResponse);
};

/**
 * Функция авторизации
 * @param email {string}
 * @param password {string}
 * @returns {Promise<Response>}
 */
export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(_checkResponse);
};

/**
 * Функция получения текущего пользователя
 * @returns {Promise<Response>}
 */
export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(_checkResponse);
};

/**
 * Функция изменения данных пользователя
 * @param data
 * @returns {Promise<Response>}
 */
export const changeUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  })
    .then(_checkResponse);
};

/**
 * Функция верификации JWT
 * @param token
 * @returns {Promise<Response>}
 */
export const verifyToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
  })
    .then(_checkResponse);
};

/**
 * Функция выхода пользователя из системы
 * @returns {Promise<Response>}
 */
export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(_checkResponse);
};

// ------------------------------- Функции для работы с фильмами
/**
 * Функция получения фильмов
 * @returns {Promise<Response>}
 */
export const getMyMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(_checkResponse);
};

/**
 * Функция добавления фильма
 * @param country {string}
 * @param director {string}
 * @param duration {number}
 * @param year {string}
 * @param description {string}
 * @param image {string}
 * @param trailerLink {string}
 * @param nameRU {string}
 * @param nameEN {string}
 * @param thumbnail {string}
 * @param movieId {number}
 * @returns {Promise<Response>}
 */
export const addMovie = (
  {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  }) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(
      {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      }),
  })
    .then(_checkResponse);
};

/**
 * Функция удаления фильма
 * @param MovieId
 * @returns {Promise<Response>}
 */
export const deleteMovie = (MovieId) => {
  return fetch(`${BASE_URL}/movies/${MovieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(_checkResponse);
};

