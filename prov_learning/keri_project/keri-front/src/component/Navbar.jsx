import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const KeriNav = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Keri-Protocol</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default KeriNav;