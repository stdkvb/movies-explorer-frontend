import React from 'react';
import FormTemplate from '../Form/Form';

function Login() {
  return (
    <FormTemplate
      title="Рады видеть!"
      buttonText="Войти"
      formText="Ещё не зарегистрированы?"
      link="/sign-up"
      linkText="Регистрация"
    >
      <label htmlFor="email" className="form-body__label">
        E-mail
        <input type="email" className="form-body__input" name="email" id="email" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
      <label htmlFor="name" className="form-body__label">
        Пароль
        <input type="password" className="form-body__input" name="password" id="password" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
    </FormTemplate>
  );
}

export default Login;
