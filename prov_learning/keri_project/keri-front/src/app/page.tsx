'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeriNav from './component/Navbar.jsx';
import App from './App.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {VerOtp} from './component/verOTP.jsx';
import { regWallet } from './component/regWallet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/otp",
    element: <VerOtp />,
  },
  // {
  //   path: "/register-wallet",
  //   element: <regWallet/>
  // },
]);
const Page = () => {
  return (
    <div className="App">
      <KeriNav />
      <RouterProvider router={router} />
    </div>
  );
};

export default Page;