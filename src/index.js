import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Woman from './pages/Woman';
import Men from './pages/Men';
import Kids from './pages/Kids';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Myhome from './pages/Myhome';
import Beauty from './pages/Beauty';
import PagenotFound from './pages/PagenotFound';

const router = createBrowserRouter([

  {
    path:"/",
    element:<App />
  },
  {
    path:"/woman",
    element:<Woman />
  },
  {
    path:"/men",
    element:<Men />
  },
  {
    path:"/kids",
    element:<Kids />
  },
  {
    path:"/home-products",
    element:<Myhome />
  },
  {
    path:"/beauty",
    element:<Beauty />
  },
  {
    path:"*",
    element:<PagenotFound />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
)


