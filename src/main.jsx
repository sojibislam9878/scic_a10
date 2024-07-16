import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import PrivetRoute from './privetRoutes/PrivetRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<PrivetRoute><App></App></PrivetRoute> ,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
