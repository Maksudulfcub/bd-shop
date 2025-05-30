import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import OurProducts from './components/OurProducts/OurProducts.jsx';
import Root from './routes/Root/Root.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/products",
        element: <OurProducts></OurProducts>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('https://admin.refabry.com/api/all/product/get')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
