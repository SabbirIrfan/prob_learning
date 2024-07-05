import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeriNav from './component/Navbar.jsx';
import { regWallet } from './component/regWallet.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VerOtp from './component/verOTP.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/otp",
    element: <VerOtp />,
  },
  {
    path: "/register-wallet",
    element: <regWallet/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <KeriNav/>
       <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
