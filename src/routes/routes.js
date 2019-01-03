import User from '../pages/user'
import Main from '../pages/login'
import Home from '../pages/home'
import Login from '../pages/login'
import NotFound from '../pages/notFound'

/**
 * Function render pages
 * @param {class} page 
 */
const renderPage = (page) => {
  switch (page) {
    case 'User':
      return User;
    case 'Login':
      return Login;
    case 'Home':
      return Home;
    default:
      return NotFound;
  }
}

/**
 * Global Routes
 */
export const globalRoutes = [
  {
    component: Login,
    routes: [
      {
        path: '/',
        exact: true,
        component: renderPage('Login')
      },
      {
        path: '/login',
        component: renderPage('Login')
      },
      {
        path: '/home',
        component: renderPage('Home'),
      },
      {
        path: '/user',
        component: renderPage('User')
      },
      {
        component: NotFound
      },
    ],
  },
];