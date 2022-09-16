import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  return (
    <div className="login">
      <AuthForm
        title="Рады видеть!"
        name="login"
        buttonText="Войти"
        signText="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkTo="/signup"
      >
        <label className="auth__label" htmlFor="email">Email</label>
        <input
          id="email"
          className="auth__input auth__input_email"
          type="email"
          name="email"
          // value={email}
          // onChange={onChange}
          placeholder=" "
          minLength="2"
          maxLength="40"
          required/>
        <span className="auth__input-error email-input-error"></span>
        <label className="auth__label" htmlFor="password">Пароль</label>
        <input
          id="password"
          className="auth__input auth__input_password"
          type="password"
          name="password"
          // value={password}
          // onChange={onChange}
          placeholder=" "
          minLength="2"
          maxLength="200"
          required/>
        <span className="auth__input-error password-input-error">Что то пошло не так...</span>
      </AuthForm>
    </div>
  );
};

export default Login;