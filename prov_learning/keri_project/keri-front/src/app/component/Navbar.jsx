import Container from "react-bootstrap/Container";
import { Navbar, Button } from "react-bootstrap";
import { useAid } from "../store/zustand";
import { useRouter } from "next/navigation";

const KeriNav = () => {
  const aid = useAid();
  const navigate = useRouter();
  const handlePushTOWallet = () => {
    console.log(aid);
    navigate.push("/clientDetails");
  };
  const handleOnclickLogo = () => {
    navigate.push("/clientHome");
  };

  const handlePushTOAid = () => {
    navigate.push("/createAid");
  };
  const  handlePushToids = () => {
    navigate.push("/identifiers");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container
          style={{ paddingBlock: "10px", padding: "10px", marginBlock: "10px" }}
        >
          <Navbar.Brand onClick={handleOnclickLogo}>Keri-Protocol</Navbar.Brand>
          {aid !== "" && (
            <Button onClick={handlePushTOWallet} variant="primary">
              Wallet
            </Button>
          )}
          {aid !== "" && (
            <Button onClick={handlePushTOAid} variant="primary">
              Create Aid
            </Button>
          )}
           {aid !== "" && (
            <Button onClick={handlePushToids} variant="primary">
              Identifiers
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default KeriNav;
