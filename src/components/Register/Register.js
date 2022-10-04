import React from 'react';
import './Register.css';
import { useFormContext } from 'react-hook-form';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import EmailInput from '../EmailInput/EmailInput';
import NameInput from '../NameInput/NameInput';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Register = () => {
  const { onRegister, onRenderLoading } = useCurrentUser();
  const { handleSubmit, formState: { errors } } = useFormContext();

  const onSubmit = (data) => {
    onRenderLoading(true);
    onRegister(data);

  };

  return (
    <main className="content">
      <div className="register">
        <AuthForm
          title="Добро пожаловать!"
          name="register"
          buttonText="Зарегистрироваться"
          signText="Уже зарегистрированы?"
          linkText="Войти"
          linkTo="/signin"
          onSubmit={handleSubmit(onSubmit)}
        >
          <NameInput
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
          <EmailInput
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
            label="Пароль"
            labelClassName="auth__label"
            inputClassName={errors.password ? 'auth__input auth__input_color_red' : 'auth__input'}
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="auth__input-error">{errors.password?.message}</span>
        </AuthForm>
      </div>
    </main>
  );
};

export default Register;