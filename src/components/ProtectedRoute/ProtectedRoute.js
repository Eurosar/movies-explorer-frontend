import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

/**
 * Защищенный роут
 * @returns {JSX.Element}
 * @constructor
 */
const ProtectedRoute = () => {

  const { loggedIn } = useCurrentUser();

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;