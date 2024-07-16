"use client"
import React from 'react'
import { useClient, useName } from '../store/zustand';
import { SignifyClient } from 'signify-ts';
import { Button, Container, Form } from 'react-bootstrap';
import { getOrCreateContact } from '../helper/clientUtil';
import { sing } from '../singerVerfer/singverify';

 const messaging = ({searchParams}:{searchParams:{
    name:string,
    id:string,
  oobi:string
 }}) => {
 const client:SignifyClient = useClient();
 const name = useName();

 const handleSigning = async (event) => {
    event.preventDefault();
    const message = document.getElementById("message")!.value;


     const embed = {
      
    };
  
  const sender = await client.identifiers().get(name);
     console.log(sender);

  const receiver = await getOrCreateContact(client,searchParams.name,searchParams.oobi);

  console.log("receiver",receiver);
    const data = {
      "message": "Hello from Signify",
      "signature": sing(client, message, sender.prefix),
    }
    const  x:String[] = ["sabbir","irfan"];
    console.log(await client.exchanges().send(name,"messaging",sender,"message/send", data, embed, [receiver] ));
  };
 console.log(searchParams.oobi);

  return (
    <Container style={{ paddingBlock: "10px", padding: "10px", marginBlock: "10px" }}>
       <Form>
      
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button type='submit' onClick={handleSigning}>
          Submit 
        </Button>
      </Form.Group>
    </Form>
    </Container>

  )
}

export default messaging;