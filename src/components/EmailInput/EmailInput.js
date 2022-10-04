import React from 'react';
import '../Input/Input.css';
import { useFormContext } from 'react-hook-form';

const Input = (
  {
    label,
    name,
    type,
    labelClassName,
    inputClassName,
    minLength,
    maxLength,
    required
  }) => {
  const { register } = useFormContext();

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        id={name}
        type={type}
        className={inputClassName}
        {...register(name, {
          required: {
            value: required,
            message: 'Обязательное поле'
          },
          minLength: {
            value: minLength,
            message: `Минимальное количество символов ${minLength}`
          },
          maxLength: {
            value: maxLength,
            message: `Максимальное количество символов ${maxLength}`
          },
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Некорректный формат почты'
          }
        })
        }
      />
    </>
  );
};

export default Input;

