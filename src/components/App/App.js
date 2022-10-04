import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../Header/Header.css';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useForm, FormProvider } from 'react-hook-form';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const methods = useForm({
    mode: 'onChange'
  });

  return (
    <CurrentUserProvider>
      <FormProvider {...methods}>
        <div className="App">
          <div className="page">
            <Routes>
              <Route path="/signup" element={<Register/>}/>
              <Route path="/signin" element={<Login/>}/>
              <Route exact path="/" element={<Main/>}/>
              <Route element={<ProtectedRoute/>}>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/saved-movies" element={<SavedMovies/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Route>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </div>
        </div>
      </FormProvider>
    </CurrentUserProvider>
  )
    ;
}

export default App;
