import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

const Register = ({ register, onSubmit, errors }) => {
  return (
    <div className="register">
      <AuthForm
        title="Добро пожаловать!"
        name="register"
        buttonText="Зарегистрироваться"
        signText="Уже зарегистрированы?"
        linkText="Войти"
        linkTo="/signin"
        onSubmit={onSubmit}
      >
        <Input
          register={register}
          label="Имя"
          labelClassName="auth__label"
          inputClassName="auth__input"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="auth__input-error">{errors.name?.message}</span>
        <Input
          register={register}
          label="Email"
          labelClassName="auth__label"
          inputClassName="auth__input"
          type="email"
          name="email"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="auth__input-error">{errors.email?.message}</span>
        <Input
          register={register}
          label="Пароль"
          labelClassName="auth__label"
          inputClassName= {errors.password ? "auth__input auth__input_color_red" : "auth__input"}
          type="password"
          name="password"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="auth__input-error">{errors.password?.message}</span>
      </AuthForm>
    </div>
  );
};

export default Register;