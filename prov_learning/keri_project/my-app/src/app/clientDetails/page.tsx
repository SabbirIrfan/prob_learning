"use client";
import React, { useEffect, useState } from "react";
import signify from "signify-ts";
import {
  useAid,
  useBran,
  useClient,
  useName,
  useOobiUrl,
} from "../store/zustand";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import KeriNav from "../component/Navbar.jsx";
import {
  getClient,
  getOrCreateClient,
  resolveOobi,
} from "../helper/clientUtil";
const ClientDeails = () => {
  const [contactList, setContactList] = useState([]);
  const aid = useAid();
  const name = useName();
  const bran = useBran();
  const oobiUrl = useOobiUrl();
  const client = useClient();
  let gotClient: signify.SignifyClient;
  useEffect(() => {
    handleFetchingClient();
  }, []);
  const handleFetchingClient = async () => {
    gotClient = await getOrCreateClient(bran);
    const contacts = await gotClient.contacts().list();
    setContactList(contacts);
    console.log(gotClient);
    
  };

  const handleResolveOobi = async () => {
    const name2: string = document.getElementById("formBasicName")!.value;
    const oobi2: string = document.getElementById("formBasicOobi")!.value;

    console.log(oobi2);
    await resolveOobi(client, oobi2, name2);
    console.log(name, " has resolved", name2, "'s OOBI");
    const resolvedContact = contactList.find(
      (contact: { alias: string }) => contact.alias === name2
    );


    console.log(resolvedContact);
    console.log(contactList);

    }

  return (
    <>
      <KeriNav />

      <div
        style={{ display: "flex", border: "1px solid #F5F5F5", gap: "10px" }}
      >
        <div
          style={{ flexBasis: "30%",whiteSpace: "nowrap", padding: "10px", border: "2px solid #F5F5F5" }}
        >
          
          <ul>
  {contactList.map((contact: { alias: string; role: string }, index: number) => (
    index >= 3 && ( // Display items starting from the fourth item
      <li key={contact.id} style={{ padding: "10px", border: "2px solid #F5F5F5", fontSize: "14px" }}>
        {contact.alias} --- {contact.id}
      </li>
    )
  ))}
</ul>
          {/* contact listss */}
        </div>
        <div style={{flexBasis: "70%" }}>
          <h2>Client Details</h2>
          <ListGroup>
            <ListGroup.Item>AID: {aid}</ListGroup.Item>
            <ListGroup.Item>Bran: {bran}</ListGroup.Item>
            <ListGroup.Item>Name: {name}</ListGroup.Item>
            <ListGroup.Item>Oobi URL: {oobiUrl}</ListGroup.Item>
          </ListGroup>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter oobi url holder name</Form.Label>
              <Form.Control type="text" placeholder="alias Name here" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOobi">
              <Form.Label>Enter oobi url to resolve</Form.Label>
              <Form.Control type="url" placeholder="oobi url here" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button onClick={handleResolveOobi}>Resolve OOBI</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ClientDeails;
