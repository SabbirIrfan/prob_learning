"use client";

import {
  useEmail, useSetAid, useSetBran, useSetClient, useSetName,
  
} from "../store/zustand";
import signify from "signify-ts";
import { resolveEnvironment } from "../component/helper/resolve-env";
import { Button, Container, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
const { url, bootUrl } = resolveEnvironment();

const CreateWallet = () => {
  const navigate = useRouter();
  const Email = useEmail();
  const setBran = useSetBran();
  const setAid = useSetAid();
  const setName = useSetName();
  const setClient = useSetClient();

 
  console.log(Email);
 
  const handleCreatingWallet = async () => {
   
   

    const name = document.getElementById("formBasicName")!.value;
    await signify.ready();
    const bran1 = signify.randomPasscode();
    const client1 = new signify.SignifyClient(
      url,
      bran1,
      signify.Tier.low,
      bootUrl
    );

    await client1.boot();
    await client1.connect();

    setClient(client1);
    setName(name);
    setBran(bran1);

    const state1 = await client1.state();
    setAid(state1.controller.state.i);

    console.log(
      "Client 1 connected. Client AID:",
      state1.controller.state.i,
      "Agent AID: ",
      state1.agent.i,
      client1.oobis().client.url
    );
 
    try {
      const response = await fetch("http://localhost:8081/createWallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: Email,
          controllerAid: state1.controller.state.i,
          agentAid: state1.agent.i,
          bran: bran1,
        }),
      });

      if (response.ok) {
        console.log("walletCreation Successfull");
        navigate.push("/clientHome");
      } else {
        console.error("wallet could not be created. try again");
      }
    } catch (error) {
      console.error("Error occurred while making API call:", error);
    }
  };

  return (
    <Container style={{ width: "50%", marginTop: "100px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Wallet Name</Form.Label>
          <Form.Control type="text" placeholder="Name here" />
          <Form.Text className="text-muted">
            Wallet will be created under this name
          </Form.Text>
        </Form.Group>

        <Button onClick={handleCreatingWallet}>create wallet</Button>
      </Form>
    </Container>
  );
};
export default CreateWallet;
