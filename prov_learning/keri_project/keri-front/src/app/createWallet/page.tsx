"use client";

import React from "react";
import { Button, Form ,Container} from "react-bootstrap";
import { useEmail, useSetOobiUrl, useSetAid, useSetName, useAid, useName, useOobiUrl, useClient, useSetClient, useBran, useSetBran } from "../store/zustand";
import signify from "signify-ts";
import {  waitOperation } from "../component/helper/clientUtil";
import { resolveEnvironment } from '../component/helper/resolve-env';
import { useRouter } from "next/navigation";
const { url, bootUrl } = resolveEnvironment();

const CreateWallet = () => {

  const navigate = useRouter();
  const Email = useEmail();
  const setName = useSetName();
  const setAid =useSetAid();
  const setOobiUrl = useSetOobiUrl();
  const aid = useAid();
  const name = useName();
  const bran = useBran();
  const setBran = useSetBran();
  const oobiUrl = useOobiUrl();
  const client = useClient();
  const setClient = useSetClient();
  console.log(Email);
  const handleCreatingWallet = async () => {
    const name = document.getElementById("formBasicName").value;
    
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
    
    const icpResult1 = await client1.identifiers().create(name, {
        toad: 3,
        wits: [
            'BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha',
            'BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM',
            'BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX',
        ],
    });
    const { response: aid1 } = await waitOperation(
        client1,
        await icpResult1.op()
    );

    let rpyResult1 = await client1
        .identifiers()
        .addEndRole(name, 'agent', client1!.agent!.pre);
    await waitOperation(client1, await rpyResult1.op());
    console.log("Alice's AID:", aid1.i);
  
    setAid(aid1.i);

    const oobi1 = await client1.oobis().get(name, 'agent');
    console.log("-----------------------",oobi1.oobis[0],"-----------------------")
    setOobiUrl(oobi1.oobis[0]);


    console.log(
      "Client 1 connected. Client AID:",
      state1.controller.state.i,
      "Agent AID: ",
      state1.agent.i,
      client1.oobis().client.url,
      "card aid == ",aid1.i,
      "oobi url == ",oobi1.oobis[0]
    
      
    );
    // const client: signify.SignifyClient = await getOrCreateClient(bran1);
    // console.log(client.identifiers.length);
    // getOrCreateIdentifier(client, name);
    
    try {
        const response = await fetch("http://localhost:8081/createWallet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
            name: name,
            aid: aid1.i,
            bran: bran1,
            oobiUrl: oobi1.oobis[0],
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
    <Container style={{width: "50%", marginTop: "100px"}}>
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