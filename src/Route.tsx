
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Pricing from './pages/Pricing';
import TVShow from './pages/TVShow';
import Login from './pages/Login';
import PrivateRoute from './PrivateRouter';
import { useState, useEffect} from 'react';


// const isLoggedIn = sessionStorage.getItem('isLoggedIn') == 'true';
   
   
const UserRoutes = [
    { path: "/", element: <Home/>, isPrivate: false},
    { path: "/login", element: <Login/>,isPrivate: false },
    { path: "/blog", element: <Blog/>, isPrivate: true},
    { path: "/movie", element: <Movie/>, isPrivate: true},
    { path: "/tvshow", element: <TVShow/>, isPrivate: false},
    { path: "/contact", element: <Contact/>, isPrivate: false},
    { path: "/pricing", element: <Pricing/>, isPrivate: false},
]



export const routes = {
    UserRoutes
}