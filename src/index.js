import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import RestaurantMenu from './components/RestaurantMenu';
import Instamart from './components/Instamart';
import Cart from './components/Cart';

const router = createBrowserRouter(
[  {
  path: "/",
  element: <Layout/>,
  errorElement: <Error/>,
  children: [
    {
      path: "/",
      element: <Body/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path:"/contact",
      element: <Contact/>,
    },
    {
      path:"/restaurant/:resId",
      element: <RestaurantMenu/>
    },
    {
      path: "/instamart",
      element: <Instamart/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
  ]

}]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

