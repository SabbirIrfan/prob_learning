"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeriNav from './component/Navbar.jsx';
// import App from './App.js'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import {OtpForm} from './otpPage/page'
import { Container } from 'react-bootstrap';
// import {VerOtp} from './component/verOTP';
// import {CreateWallet} from './component/createWallet'
// import {ClientDeails} from './component/clientDeails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },{
//     path: "/otp",
//     element: <VerOtp />,
//   },
//   {
//     path: "/createWallet",
//     element: <CreateWallet/>,
//   },
//   {
//     path:"clientDetails",
//     element: <ClientDeails/>
//   }
// ]);
const Page = () => {
  return (
    <div className="App">
      <KeriNav />
      {/* <RouterProvider router={router} /> */}
      <Container style={{width: "50%", marginTop: "100px"}}>
         <OtpForm />
      </Container>
    </div>
  );
};

export default Page;