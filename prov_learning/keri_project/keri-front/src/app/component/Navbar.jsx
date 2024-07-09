import Container from 'react-bootstrap/Container';
import { Navbar, Button } from 'react-bootstrap';
import { useAid } from '../store/zustand';
import { useRouter } from "next/navigation";

const KeriNav = ()=> {
  const aid = useAid();
  const navigate = useRouter();
  const handleOnclick = () => {
    console.log(aid);
    navigate.push('/clientDetails');
  }
  const handleOnclickLogo = () => {
    navigate.push('/clientHome');
  }
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
       <Container style={{paddingBlock: "10px", padding: "10px", marginBlock: "10px"}}>
         <Navbar.Brand onClick={handleOnclickLogo}>Keri-Protocol</Navbar.Brand>
         {aid !== "" && (
           <Button onClick={handleOnclick} variant="primary">My Button</Button>
         )}
       </Container>
     </Navbar>
    </>
  );
}

export default KeriNav;