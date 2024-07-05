import React from "react";
import { useStore } from "zustand";
import { useAgentAid, useAid, useName, useOobiUrl } from "./store/zustand";
import { Container, ListGroup } from "react-bootstrap";

export const ClientDeails = () => {
  const aid = useAid();
  const name = useName();
  const agentAid = useAgentAid();
  const oobiUrl = useOobiUrl();

  return (
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
    </div>
  </div>
  );
};
