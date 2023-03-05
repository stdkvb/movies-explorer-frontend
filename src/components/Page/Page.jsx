import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import logo from '../../images/logo.svg';

function Page() {
  return (
    <>
      {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Movies Explorer project" />
        <meta name="author" content="B.Sitdikov" />
        <link rel="icon" type="image/x-icon" href={logo} />
        <title>Movies Explorer</title>
      </head> */}
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Page;
