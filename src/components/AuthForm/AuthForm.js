import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

function AuthForm(
  {
    title,
    name,
    buttonText,
    signText,
    linkText,
    linkTo,
    onSubmit,
    children
  }) {

  const { formState: { isValid } } = useFormContext();

  return (
    <div className="auth">
      <Link className="auth__link link" to="/"><img className="auth__logo" src={logo} alt="Логотип"/></Link>
      <h1 className="auth__title">{title}</h1>
      <form name={name} className={`auth__form form-${name}`} onSubmit={onSubmit} noValidate>
        <div className="auth__inputs">
          {children}
        </div>
        <button type="submit" className="auth__button" disabled={!isValid}>{buttonText}</button>
        <div className="auth__sign">
          <p className="sign__text">{signText}
            <Link to={linkTo} className="sign__link link">{linkText}</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;