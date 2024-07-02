import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

 const OtpForm = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/otp', { replace: true });

  }
  return (
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
  );
}

export default OtpForm;