import React, { createContext, useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './Route';

interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextType | undefined>(undefined);

const App: React.FC = () => {
  const testIsLoggedIn = !!sessionStorage.getItem('user_info');
  const [isLoggedIn, setIsLoggedIn] = useState(testIsLoggedIn);

  const contextValue: LoginContextType = {
    isLoggedIn,
    setIsLoggedIn,
  };

  console.log(isLoggedIn);
  
  return (
    <LoginContext.Provider value={contextValue}>
      <Router>
        <Layout />
        <Routes>
          {routes.UserRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate && !isLoggedIn ? (
                  <Navigate to="/login" />
                ) : (
                  route.element
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
