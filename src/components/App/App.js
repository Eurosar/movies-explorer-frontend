import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../Header/Header.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            exact path="/"
            element={<Main/>}>
          </Route>
          <Route
            path="/movies"
            element={<Movies/>}>
          </Route>
          <Route
            path="/saved-movies"
            element={<SavedMovies/>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
