import React from 'react';

const Home = React.lazy(() => import('../pages/home'));
const Login = React.lazy(() => import('../pages/login'));

const allRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
    isPrivate: true,
    hasLoginRegister: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login,
    isPrivate: false,
    hasLoginRegister: true,
  }
];

export { allRoutes };
