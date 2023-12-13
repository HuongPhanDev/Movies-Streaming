
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Pricing from './pages/Pricing';
import TVShow from './pages/TVShow';
import Login from './pages/Login';
import PrivateRoute from './PrivateRouter';

const isLoggedIn = sessionStorage.getItem('isLoggedIn') == 'true';

const UserRoutes = [
    { path: "/", element: <Home/>},
    { path: "/login", element: <Login/>},
    { path: "/blog", element: <PrivateRoute isAuthenticated={isLoggedIn}><Contact/></PrivateRoute>},
    { path: "/movie", element: <PrivateRoute isAuthenticated={isLoggedIn}><Movie/></PrivateRoute>},
    { path: "/tvshow", element: <PrivateRoute isAuthenticated={isLoggedIn}><TVShow/></PrivateRoute>},
    { path: "/contact", element: <Contact/>},
    { path: "/pricing", element: <Pricing/>},
]

export const routes = {
    UserRoutes
}