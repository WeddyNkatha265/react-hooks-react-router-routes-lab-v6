// routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = [
  { path: '/', component: Home },
  { path: '/directors', component: Directors },
  { path: '/actors', component: Actors },
  { path: '/movie/:id', component: Movie }, // Use a URL parameter for movie ID
];

export default routes;
