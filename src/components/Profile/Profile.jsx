import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function Profile({ onCurrentUser, onLoggedIn }) {
  const { name, email } = useContext(CurrentUserContext);
  const [activeForm, setActiveForm] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    mainApi.logoutUser();
    onLoggedIn(false);
    navigate('/');
  };
  return (
    <section className='profile'>
      <div className='profile__container'>
        <p className='profile__title'>{`Привет, ${name}!`}</p>
        <form className='profile__form' onSubmit={handleSubmit(handleUpdateSubmit)}>
          <label className='profile__label' htmlFor='name'>
            Имя
            <input
              className='profile__input'
              type='text'
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
          <label className='profile__label' htmlFor='email'>
            Email
            <input
              className='profile__input'
              id='email'
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
          <button className='profile__button' type='button'>Редактировать</button>
          <button className='profile__button profile__button_red' type='button'>Выйти из аккаунта</button>
          {activeForm
            ? (
              <>
                <span className="profile__error">
                  {(errors.name && errors.name.message) || (errors.email && errors.email.message)}
                </span>
                <button type="submit" className={`profile__button ${!isValid ? 'profile__button_disabled' : ''}`} disabled={!isValid}>Сохранить</button>
              </>
            )
            : (
              <>
                <button type="button" className="profile__button" onClick={handleActiveForm}>Редактировать</button>
                <button type="button" className="profile__button profile__button_red" onClick={handleLogout}>Выйти из аккаунта</button>
              </>
            )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
