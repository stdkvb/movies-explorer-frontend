import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import HeadMain from '../HeadMain/HeadMain';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function Profile({ onCurrentUser, onLogout }) {
  const { name, email } = useContext(CurrentUserContext);
  const [activeForm, setActiveForm] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleActiveForm = () => {
    setActiveForm(!activeForm);
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0 || (name === newName && email === newEmail)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [handleChangeName, handleChangeEmail]);

  const handleUpdateSubmit = () => {
    mainApi.updateUser(newName, newEmail)
      .then((response) => {
        onCurrentUser(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => handleActiveForm());
  };

  return (
    <>
      <HeadMain />
      <section className="form form-profile">
        <div className="form__wrapper form-profile__wrapper">
          <h1 className="form__title form-profile__title">{`Привет, ${name}!`}</h1>
          <form className="form-body register__form" onSubmit={handleSubmit(handleUpdateSubmit)}>
            <label htmlFor="name" className="form-body__label form-profile__label">
              Имя
              <input
                type="text"
                className="form-body__input form-profile__input form-profile__input_separate"
                id="name"
                defaultValue={name || ''}
                onChange={handleChangeName}
                disabled={!activeForm}
                {...register('name', {
                  required: 'Нужно ввести имя',
                  maxLength: {
                    value: 30,
                    message: 'В поле «Имя» допустимо максимум 30 символов',
                  },
                  minLength: {
                    value: 2,
                    message: 'В поле «Имя» должно быть минимум 2 символа',
                  },
                  pattern: {
                    value: /^[а-яА-Яa-zA-ZЁё\-\s]*$/,
                    message: 'Имя может содержать только символы латиницы, символы кириллицы, пробел и дифис',
                  },
                  onChange: handleChangeName,
                  value: newName,
                })}
              />
            </label>
            <label htmlFor="email" className="form-body__label form-profile__label">
              E-mail
              <input
                type="email"
                className="form-body__input form-profile__input"
                id="email"
                defaultValue={email || ''}
                disabled={!activeForm}
                {...register('email', {
                  required: 'Нужно ввести электронную почту',
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Электронная почта не соответствует формату – login@mail.ru',
                  },
                  onChange: handleChangeEmail,
                  value: newEmail,
                })}
              />
            </label>
            {activeForm
              ? (
                <>
                  <span className="form-body__error_submit form-profile__error">
                    {(errors.name && errors.name.message) || (errors.email && errors.email.message)}
                  </span>
                  <button type="submit" className={`form-body__button ${!isValid ? 'form-body__button_disabled' : ''}`} disabled={!isValid}>Сохранить</button>
                </>
              )
              : (
                <>
                  <button type="button" className="form-profile__text form-profile__text_separator" onClick={handleActiveForm}>Редактировать</button>
                  <button type="button" className="form-profile__text form-profile__text_important" onClick={onLogout}>Выйти из аккаунта</button>
                </>
              )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
