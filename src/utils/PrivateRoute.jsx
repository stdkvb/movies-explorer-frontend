import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
