"use client";
import React, { useEffect, useState } from "react";
import signify, { Identifier, SignifyClient } from "signify-ts";
import {
  useAid,
  useBran,
  useClient,
  useName,
  useEmail,
  useSetAid,
  useSetClient,
  useIds,
} from "../store/zustand";
import { Button, ListGroup } from "react-bootstrap";
import { useRouter } from "next/navigation";

import { getOrCreateClient, getOrCreateContact, getOrCreateIdentifier } from "../helper/clientUtil";
import { sing } from "../singerVerfer/singverify";
import { send } from "process";
import Link from "next/link";
const ClientDeails = () => {
  const navigate = useRouter();
  const [contactList, setContactList] = useState([]);
  const alias = useIds();
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
    console.log(contacts[0]);
    
    setContactList(contacts);
    console.log(contacts);
  //   const embed = {
      
  //   };
  
  // const sender = alias.find((x) => x.name === "sabbir");
  //    console.log(sender);

    //  const receiver = await getOrCreateContact(gotClient,"irfanN","http://127.0.0.1:3902/oobi/EMBxR9JJOZzYNpa--zVIumwcDRBuwTsKK5vHLrGUxlGX/agent/EOVFMxCjvfC3BqkJM5yjJwwTZQ3w2PyBnwwOZV2SgBF3");

  // console.log("receiver",receiver);
  //   const data = {
  //     "message": "Hello from Signify",
  //     "signature": sing(gotClient, "Hello from Signify", sender.prefix),
  //   }
  //   const  x:String[] = ["sabbir","irfan"];
  //   console.log(await gotClient.exchanges().send("sabbir","messaging",sender,"message/send", data, embed, [receiver] ));
    
    
  };


  return (
    <>
      {/* <KeriNav /> */}
  
      <div style={{ display: "flex", border: "1px solid #F5F5F5", gap: "5px" }}>
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
                (contact: { alias: string; id: string, oobi:string }, index: number) =>
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
                     <Link href={{
                      pathname: "/messaging",
                      query: {alias : contact.alias,
                          id : contact.id,
                          oobi : contact.oobi  
                      }
                     }}>Message</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div style={{ flexGrow: "60%" }}>
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
