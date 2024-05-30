import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainPage} from './pages/MainPage';
import { AddWorkoutPage } from './pages/AddWorkoutPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {ErrorPage} from './pages/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/addWorkout",
      element: <AddWorkoutPage/>,
      errorElement: <ErrorPage/>,
    },
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

