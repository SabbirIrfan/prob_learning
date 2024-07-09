"use client";
import React from "react";
import KeriNav from "../component/Navbar.jsx";
import { Container, ListGroup } from "react-bootstrap";
import { useAid, useName } from "../store/zustand.js";
const clientHome = () => {
    const aid = useAid();
    const name = useName();

  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #F5F5F5",
            gap: "10px",
          }}
        >
          <div
            className="App"
          >
            <KeriNav />
          </div>
          
          <div style={{ flex: "3" }}>
            
            <ListGroup style={{display: "flex", flexDirection: "row", gap: "30px",}}>
                <ListGroup.Item>Name: {name}</ListGroup.Item>
              <ListGroup.Item>AID: {aid}</ListGroup.Item>
            </ListGroup>
          </div>
          <div style={{ flex: "3" }}>
        
          </div>
        </div>
      </Container>
    </>
  );
};

export default clientHome;
