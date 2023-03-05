import React from 'react';
import Form from '../Form/Form';

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      formText="Уже зарегистрированы?"
      link="/sign-in"
      linkText="Войти"
    >
      <label htmlFor="name" className="form-body__label">
        Имя
        <input type="text" className="form-body__input" name="name" id="name" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
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
    </Form>
  );
}

export default Register;
