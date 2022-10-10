import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import UseFormProfile from '../UseFormProfile/UseFormProfile';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


const Profile = () => {

  const { currentUser, signOut, isInfoTooltipOpen, isSuccess, onClose } = useCurrentUser();

  return (
    <>
      <Header/>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <UseFormProfile profileValues={currentUser}/>
        <Link to="/" className="profile__link link" onClick={signOut}>Выйти из аккаунта</Link>
      </section>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        isSuccess={isSuccess}
        onClose={onClose}
        toolTipText={isSuccess ? 'Данные успешно изменились!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
      />
    </>
  );
};

export default Profile;