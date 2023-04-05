import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DashboardUser from './Pages/DashboardUser';
import Welcome from './Pages/Welcome';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import DashboardProducts from './Pages/DashboardProducts';



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute component={<Welcome />} />,
  },
  {
    path: "/user",
    element: <PrivateRoute component={<DashboardUser />} />,
  },
  {
    path: "/products",
    element: <PrivateRoute component={<DashboardProducts />} />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
