import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

const Register = () => {

  return (
    <div className="register">
      <AuthForm
        title="Добро пожаловать!"
        name="register"
        buttonText="Зарегистрироваться"
        signText="Уже зарегистрированы?"
        linkText="Войти"
        linkTo="/signin"
      >
        <label className="auth__label" htmlFor="name">Имя</label>
        <input
          id="name"
          className="auth__input auth__input_name"
          type="text"
          name="name"
          // value={email}
          // onChange={onChange}
          placeholder=" "
          minLength="2"
          maxLength="40"
          required/>
        <span className="auth__input-error email-input-error"></span>
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

export default Register;