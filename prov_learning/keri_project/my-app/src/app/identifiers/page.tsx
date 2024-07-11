"use client";
import React, { useEffect, useState } from 'react'
import { useClient, useIds, useName } from '../store/zustand';
import { Accordion, Button, Form } from 'react-bootstrap';
import { resolveOobi } from '../helper/clientUtil';
import KeriNav from '../component/Navbar';

 const Identifiers = () => {
    const alias = useIds();
    const client = useClient();
    const name = useName();
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        handleIdentifiersOobi();
      }, [count]);

      const handleIdentifiersOobi = async () => {
            for(let i = 0; i<alias.length; i++){
                console.log(alias[i].name);
                const oobi = await client.oobis().get(alias[i].name, 'agent');
                alias[i] = {...alias[i], 'oobi': oobi.oobis[0]};
                console.log(oobi.oobis[0]);
                
            }
            setCount(1);
      }

    const handleResolveOobi = async () => {
        const name2: string = document.getElementById("formBasicName")!.value;
        const oobi2: string = document.getElementById("formBasicOobi")!.value;
    
        console.log(oobi2);
        await resolveOobi(client, oobi2, name2);
        console.log(name, " has resolved", name2, "'s OOBI");
        
        
      };
  return (
    <div>
        {/* <KeriNav /> */}
        <div style={{display:"flex", flexDirection:"column", gap:"10px",}}>
        <div style={{flex:"1", paddingLeft:"30px"}}>
            <ul>
              <h4>Identifiers List</h4>
              {alias.map(
                (ids: { name: string; prefix: string ; oobi: string}, index: number) =>
                  (
                    <li
                      key={ids.name}
                      style={{
                        padding: "10px",
                        border: "2px solid #F5F5F5",
                        fontSize: "14px",
                      }}
                    >
                      {ids.name} --- {ids.prefix} ---
                       <Accordion defaultActiveKey="0"  >
                        <Accordion.Item eventKey="1" >
                          <Accordion.Header style={{padding:"1"}} >OOBI</Accordion.Header>
                          <Accordion.Body>
                            {ids.oobi}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </li>
                  )
              )}
            </ul>
          </div>
         <div style={{width:"100%", paddingLeft:"30px"}}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Resolve OOBI</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Enter oobi url holder name</Form.Label>
                      <Form.Control type="text" placeholder="Alias Name here" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOobi">
                      <Form.Label>Enter oobi url to resolve</Form.Label>
                      <Form.Control type="url" placeholder="Oobi URL here" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button onClick={handleResolveOobi}>Resolve OOBI</Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          </div>
    </div>
  )
}

export default Identifiers;