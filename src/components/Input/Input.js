import React from 'react';
import './Input.css';

const Input = (
  {
    label,
    name,
    type,
    labelClassName,
    inputClassName,
    register,
    minLength,
    maxLength,
    pattern,
    required,
  }) => {

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
            message: `Максимальное количество символов ${maxLength} символов`
          },
          pattern: {
            value: pattern,
            message: 'pattern'
          }
        })}
      />
    </>
  );
};

export default Input;

