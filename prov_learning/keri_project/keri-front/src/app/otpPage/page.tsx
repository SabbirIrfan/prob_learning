"use client";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useSetEmail } from '../store/zustand';
import { useRouter } from 'next/navigation';
import  KeriNav  from "../component/Navbar.jsx";

// import stringify from 'signify-ts';

 export const OtpForm = () => {
  const setEmail = useSetEmail();
  const router = useRouter();



  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const email: string = document.getElementById('formBasicEmail')!.value; // Get the email value from the form
    setEmail(email);
    try {
      console.log({email});

      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }) // Pass the email in the request body
      });

      if (response.ok) {
        console.log('API call successful');
        router.push('/verifyOtp');
        
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error occurred while making API call:', error);
    }
  };



  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          You'll recieve an OTP on this email
        </Form.Text>
      </Form.Group>

    
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </>
  );
}

