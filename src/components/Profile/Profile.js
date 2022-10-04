import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import UseFormProfile from '../UseFormProfile/UseFormProfile';


const Profile = () => {

  const { currentUser, signOut } = useCurrentUser();

  return (
    <>
      <Header/>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <UseFormProfile profileValues={currentUser}/>
        <Link to="/" className="profile__link link" onClick={signOut}>Выйти из аккаунта</Link>
      </section>
    </>
  );
};

export default Profile;