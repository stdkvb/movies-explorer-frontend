import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../../images/logo.svg';

function HeadMain() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
      <meta name="author" content="Sitdikov B." />
      <link rel="icon" type="image/x-icon" href={logo} />
      <title>Movies-Explorer</title>
    </Helmet>
  );
}

export default HeadMain;
