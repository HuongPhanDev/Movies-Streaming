import React, { ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ isAuthenticated: any; children: any }> = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
