"use client";
import React from "react";
import { useAgentAid, useAid, useClient, useName, useOobiUrl } from "../store/zustand";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import  KeriNav  from "../component/Navbar.jsx";
import { resolveOobi } from "../helper/clientUtil";
const ClientDeails = () => {
  const aid = useAid();
  const name = useName();
  const agentAid = useAgentAid();
  const oobiUrl = useOobiUrl();
  const client = useClient();
  const handleResolveOobi =   async () => {
    const name2 = document.getElementById("formBasicName").value;
    const oobi2 = document.getElementById("formBasicOobi").value;

    console.log(oobi2);
    await resolveOobi(client, oobi2,name2 );
    console.log(name," has resolved",name2,"'s OOBI");
    let contacts1 = await client.contacts().list();
    console.log(contacts1);
    let bobContact = contacts1.find(
      (contact: { alias: string }) => contact.alias === name2
  );
  console.log(bobContact);


  }
  return (
    <>
          <KeriNav />

    <div style={{ display: 'flex', border: '1px solid #F5F5F5', gap: '10px' }}>
    <div style={{ flex: '1' , padding: '10px', border: '2px solid #F5F5F5'}}>

      <h4  style={{ flex: '1' , padding: '10px', border: '2px solid #F5F5F5'}}>Contact List</h4>
       {/* contact listss */}
    </div>
    <div style={{ flex: '3' }}>
      <h2>Client Details</h2>
      <ListGroup>
        <ListGroup.Item>AID: {aid}</ListGroup.Item>
        <ListGroup.Item>Agent AID: {agentAid}</ListGroup.Item>
        <ListGroup.Item>Name: {name}</ListGroup.Item>
        <ListGroup.Item>Oobi URL: {oobiUrl}</ListGroup.Item>
      </ListGroup>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter oobi url holder name</Form.Label>
          <Form.Control type="text" placeholder="alias Name here" />
          <Form.Text className="text-muted">            
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicOobi">
          <Form.Label>Enter oobi url to resolve</Form.Label>
          <Form.Control type="url" placeholder="oobi url here" />
          <Form.Text className="text-muted">            
          </Form.Text>
        </Form.Group>

        <Button onClick={handleResolveOobi}>Resolve OOBI</Button>

      </Form>
    </div>
  </div>
  </>
  );
};

export default ClientDeails;