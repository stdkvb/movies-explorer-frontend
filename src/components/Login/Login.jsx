import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';

function Login({ onLoginSubmit, submitError }) {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    setFocus,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      formText="Ещё не зарегистрированы?"
      link="/sign-up"
      linkText="Регистрация"
      isValid={isValid}
      onHandleSubmit={handleSubmit}
      onSubmit={onLoginSubmit}
      submitError={submitError}
    >
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
          className={`form-body__input ${errors.password && 'form-body__input_error'}`}
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

export default Login;
