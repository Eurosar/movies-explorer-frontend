import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

/**
 * Защищенный роут
 * @returns {JSX.Element}
 * @constructor
 */

const ProtectedRoute = () => {

  const { loggedIn } = useCurrentUser();

  return loggedIn ? <Outlet/> : <Navigate to="/"/>;
};

export default ProtectedRoute;