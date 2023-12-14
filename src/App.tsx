import React from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './Route';
import PrivateRoute from './PrivateRouter';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  setTimeout(() => {
    setIsLoggedIn(false)
  }, 5000);

  console.log("hi");
  
  // useEffect ( () => {
  //   if (sessionStorage.getItem('isLoggedIn') === 'true') {
  //     setIsLoggedIn(f)
      
  // }
  // }) 


  
  return (
    <>
    <Router>
      <Layout/>
        <Routes>
          {routes.UserRoutes.map((route: any) => (
              <Route key={route.path} path={route.path} element= {isLoggedIn != true && route.isPrivate == true  ? <Navigate to={'/login'}/> : route.element }/>
            ))}
        </Routes>
    </Router>
    </>
  );
}

export default App;
