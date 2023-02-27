import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className="error-page">
      <div className="error-page_wrapper">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__description">Страница не найдена</p>
        <Link to="/" className="navigation-link error-page__link">Назад</Link>
      </div>
    </main>
  );
}

export default ErrorPage;
