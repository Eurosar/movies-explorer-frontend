import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import '../Header/Header.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useForm, FormProvider } from 'react-hook-form';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const {
    loggedIn, isTokenChecked,
    isInfoTooltipErrorOpen,
    error,
    onClose
  } = useCurrentUser();

  const methods = useForm({
    mode: 'onChange'
  });

  return (
    <FormProvider {...methods}>
      <div className="App">
        <div className="page">
          <Routes>
            <Route path="/signup" element={loggedIn ? (
              <Navigate to="/"/>
            ) : (
              <Register/>
            )}/>
            <Route path="/signin" element={loggedIn ? (
              <Navigate to="/"/>
            ) : (
              <Login/>
            )}/>
            <Route exact path="/" element={<Main/>}/>
            <Route element={isTokenChecked ? <ProtectedRoute/> : <Preloader/>}>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/saved-movies" element={<SavedMovies/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <InfoTooltip
            isOpen={isInfoTooltipErrorOpen}
            isSuccess={false}
            onClose={onClose}
            toolTipText={error}
          />
        </div>
      </div>
    </FormProvider>
  )
    ;
}

export default App;
