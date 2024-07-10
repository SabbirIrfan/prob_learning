"use client";
import React, { useEffect, useState } from "react";
import signify, { Identifier } from "signify-ts";
import {
  useAid,
  useBran,
  useClient,
  useName,
  useOobiUrl,
  useEmail,
  useSetName,
  useSetOobiUrl,
  useSetAid,
  useSetBran,
  useSetEmail,
  useSetClient,
  useSetIds,
} from "../store/zustand";
import {
  Accordion,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap";
import KeriNav from "../component/Navbar.jsx";
import {
  getOrCreateClient,
  getOrCreateIdentifier,
  resolveOobi,
} from "../helper/clientUtil";
const ClientDeails = () => {
  const [contactList, setContactList] = useState([]);
  const aid = useAid();
  const name = useName();
  const bran = useBran();
  const client = useClient();
  const email = useEmail();
  const setAid = useSetAid();
  const setClient = useSetClient();
  let gotClient: signify.SignifyClient;
  useEffect(() => {
    handleFetchingClient();
  }, []);
  const handleFetchingClient = async () => {
    gotClient = await getOrCreateClient(bran);
    setClient(gotClient);

    
    const contacts = await gotClient.contacts().list();
    setContactList(contacts);
    console.log(contacts);
    
  };

  

  return (
    <>
      <KeriNav />

      <div
        style={{ display: "flex", border: "1px solid #F5F5F5", gap: "5px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "30%",
            whiteSpace: "nowrap",
            padding: "10px",
            border: "2px solid #F5F5F5",
          }}
        >
          <div>
            <ul>
              <h4>Contact List</h4>
              {contactList.map(
                (contact: { alias: string; role: string }, index: number) =>
                  index >= 3 && ( // Display items starting from the fourth item
                    <li
                      key={contact.id}
                      style={{
                        padding: "10px",
                        border: "2px solid #F5F5F5",
                        fontSize: "14px",
                      }}
                    >
                      {contact.alias} --- {contact.id}
                    </li>
                  )
              )}
            </ul>
          </div>
         
        </div>
        <div style={{flexGrow: "60%" }}>
          <h2>Client Details</h2>
          <ListGroup>
            <ListGroup.Item>Name: {name}</ListGroup.Item>
            <ListGroup.Item>email: {email}</ListGroup.Item>
            <ListGroup.Item>Controller: {aid}</ListGroup.Item>
            <ListGroup.Item>Bran: {bran}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default ClientDeails;
