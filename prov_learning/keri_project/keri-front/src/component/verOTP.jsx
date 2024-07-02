import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Link, useNavigate } from 'react-router-dom';
function VerOtp() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        
       navigate('/', { replace: true });
    
      }
  return (
    <Container style={{width: "50%", marginTop: "100px"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
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

export default VerOtp