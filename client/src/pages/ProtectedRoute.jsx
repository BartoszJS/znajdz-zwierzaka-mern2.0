import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const ProtectedRoute = ({ children }) => {
  const { user, protectedAlert } = useAppContext();
  if (!user) {
    protectedAlert();
    return <Navigate to='/register' />;
  }
  return children;
};

export default ProtectedRoute;
