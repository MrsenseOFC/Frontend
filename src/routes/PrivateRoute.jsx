import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext/AuthContext.tsx';

export function PrivateRoute({ element: Component, ...rest }) {
  const { currentUser } = useAuth();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return currentUser ? <Component {...rest} /> : <Navigate to="/login" replace />;
}