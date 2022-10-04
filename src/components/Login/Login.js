import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useFormContext } from 'react-hook-form';
import EmailInput from '../EmailInput/EmailInput';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Login = () => {

  const { onLogin, onRenderLoading } = useCurrentUser();
  const { handleSubmit, formState: { errors } } = useFormContext();

  const onSubmit = (data) => {
    onRenderLoading(true);
    onLogin(data);
  };

  return (
    <main className="content">
      <div className="login">
        <AuthForm
          title="Рады видеть!"
          name="login"
          buttonText="Войти"
          signText="Ещё не зарегистрированы?"
          linkText="Регистрация"
          linkTo="/signup"
          onSubmit={handleSubmit(onSubmit)}
        >
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

export default Login;