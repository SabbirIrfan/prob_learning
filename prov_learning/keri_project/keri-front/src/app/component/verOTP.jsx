import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useEmail } from './store/zustand';
export const  VerOtp = ()=> {
    const Email = useEmail();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        const otp = document.getElementById('formBasicOtp').value;
        event.preventDefault();
       
        try {
          console.log({Email});
    
          const response = await fetch('http://localhost:8081/verify-account', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email : Email, otp: otp}) // Pass the email in the request body
          });
    
          if (response.ok) {
            console.log('OTP verified successfully');
            navigate('/');
          } else {
            console.error('OTP verification failed-- try again');
            displayWarningMessage('Incorrect OTP entered');
          }
        } catch (error) {
          console.error('Error occurred while making API call:', error);
        }
    
      }

      const displayWarningMessage = (message) => { 
       alert(message);
      }
      
     
  return (
    <Container style={{width: "50%", marginTop: "100px"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicOtp">
      <Form.Label>Enter OTP</Form.Label>
      <Form.Control type="email" placeholder="Enter OTP here" />

    </Form.Group>

  
    <Button onClick={handleSubmit} variant="primary" type="submit" >
      Verify
    </Button>
  </Form>
  </Container>
  )
}

