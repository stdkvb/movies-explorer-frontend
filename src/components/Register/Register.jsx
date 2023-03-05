import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';

function Register() {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    setFocus,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      formText="Уже зарегистрированы?"
      link="/sign-in"
      linkText="Войти"
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="form-body__label">
        Имя
        <input
          type="text"
          className={`form-body__input ${errors.name && 'form-body__input_error'}`}
          id="name"
          {...register('name', {
            required: 'Нужно ввести имя',
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов',
            },
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            pattern: {
              value: /^[а-яА-Яa-zA-ZЁё\-\s]*$/,
              message: 'Имя может содержать только из символы латиницы, символы кириллицы, пробел и дифис',
            },
          })}
        />
        <span className="form-body__error">{errors.name && `${errors.name.message || 'Что-то пошло не так...'}`}</span>
      </label>
      <label htmlFor="email" className="form-body__label">
        E-mail
        <input
          type="email"
          className={`form-body__input ${errors.email && 'form-body__input_error'}`}
          id="email"
          {...register('email', {
            required: 'Нужно ввести электронную почту',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Электронная почта не соответствует формату – login@mail.ru',
            },
          })}
        />
        <span className="form-body__error">{errors.email && `${errors.email.message || 'Что-то пошло не так...'}`}</span>
      </label>
      <label htmlFor="name" className="form-body__label">
        Пароль
        <input
          type="password"
          className={`form-body__input ${errors.email && 'form-body__input_error'}`}
          id="password"
          {...register('password', {
            required: 'Нужно ввести пароль',
            minLength: {
              value: 6,
              message: 'Пароль должен быть больше 6 символов',
            },
          })}
        />
        <span className="form-body__error">{errors.password && `${errors.password.message || 'Что-то пошло не так...'}`}</span>
      </label>
    </Form>
  );
}

export default Register;
