import React from 'react';
import '../Input/Input.css';
import { useFormContext } from 'react-hook-form';

const NameInput = (
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
            value: /^([а-яё\s-]+|[a-z\s-]+)$/iu,
            message: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
          }
        })
        }
      />
    </>
  );
};

export default NameInput;

