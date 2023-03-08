import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes(loggedIn) {
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoutes;
