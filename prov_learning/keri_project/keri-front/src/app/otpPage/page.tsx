"use client";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useSetEmail } from '../store/zustand';
import { useRouter } from 'next/navigation';

 export const OtpForm = () => {
  const setEmail = useSetEmail();
  const navigate = useRouter();



  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const email: string = document.getElementById('formBasicEmail')!.value; // Get the email value from the form
    setEmail(email);
    localStorage.setItem('email', email);
    console.log(email);
    navigate.push('/createWallet');

    
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

