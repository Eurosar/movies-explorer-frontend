import React, { useEffect, useState } from 'react';
import '../Profile/Profile.css';
import { useForm } from 'react-hook-form';
import { changeUserInfo } from '../../utils/MainApi';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const UseFormProfile = ({ profileValues }) => {

  const { setCurrentUser, onRenderLoading } = useCurrentUser();

  const [ valueName, setValueName ] = useState(null);
  const [ valueEmail, setValueEmail ] = useState(null);
  const [ disabledSubmit, setDisabledSubmit ] = useState(false);

  /**
   * Функция отправки формы
   * @param data
   */
  const onSubmit = (data) => {
    onRenderLoading(true);
    if (valueName.length && valueEmail.length) {
      changeUserInfo(data)
        .then((data) => {
          setCurrentUser(data);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setDisabledSubmit(true);
          onRenderLoading(false);
        });
    }
  };

  /**
   * Сохраним значение имени
   * @param data
   */
  const onChangeName = (data) => {
    setValueName(data.target.value);
  };

  /**
   * Сохраним значение email
   * @param data
   */
  const onChangeEmail = (data) => {
    setValueEmail(data.target.value);
  };

  useEffect(() => {
    setValueName(profileValues.name);
    setValueEmail(profileValues.email);
    setValue('name', profileValues.name);
    setValue('email', profileValues.email);
  }, [ profileValues ]);

  useEffect(() => {
    if (valueName === profileValues.name && valueEmail === profileValues.email) {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  }, [ valueName, valueEmail ]);

  const { register, handleSubmit, setValue } = useForm({
    mode: 'onChange',
  });

  return (
    <form className="profile__form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <ul className="profile__list">
        <li className="profile__item">
          <label className="profile__item_text">Имя</label>
          <input
            type="name"
            className="profile__item_text profile__item_input"
            {...register('name', {
              required: {
                value: true,
                message: 'Обязательное поле'
              },
              minLength: {
                value: 2,
                message: `Минимальное количество символов 2`
              },
              maxLength: {
                value: 40,
                message: `Максимальное количество символов 40`
              },
              pattern: {
                value: /^([а-яё\s-]+|[a-z\s-]+)$/iu,
                message: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
              },
              onChange: onChangeName
            })}
          />
        </li>
        <li className="profile__item">
          <label className="profile__item_text">E-mail</label>
          <input
            className="profile__item_text profile__item_input"
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Обязательное поле'
              },
              minLength: {
                value: 2,
                message: `Минимальное количество символов 2`
              },
              maxLength: {
                value: 40,
                message: `Максимальное количество символов 40`
              },
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Некорректный формат почты'
              },
              onChange: onChangeEmail
            })
            }
          />
        </li>
      </ul>
      <button className="profile__button" type="submit" disabled={disabledSubmit}>Редактировать</button>
    </form>
  );
};

export default UseFormProfile;