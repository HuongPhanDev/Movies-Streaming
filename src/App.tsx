import React from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Route';

function App() {
  return (
    <>
    <Router>
      <Layout/>
        <Routes>
          {routes.UserRoutes.map((route: any) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
        </Routes>
    </Router>
    </>
  );
}

export default App;
