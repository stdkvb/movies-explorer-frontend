function Profile() {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <p className='profile__title'>Привет, Виталий!</p>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='name'>
            Имя
            <input className='profile__input' id='name' type='text' required placeholder='Виталий' />
          </label>
          <label className='profile__label' htmlFor='email'>
            Email
            <input className='profile__input' id='email' type='text' required placeholder='pochta@yandex.ru' />
          </label>
          <button className='profile__button' type='button'>Редактировать</button>
          <button className='profile__button profile__button_red' type='button'>Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
