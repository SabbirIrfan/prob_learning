"use client";
import React, { useEffect, useState } from 'react'
import { useClient, useIds, useName } from '../store/zustand';
import { Accordion, Button, Container, Form } from 'react-bootstrap';
import { resolveOobi } from '../helper/clientUtil';
import { useRouter } from 'next/navigation';
 const Identifiers = () => {
    const alias = useIds();
    const client = useClient();
    const name = useName();
    const [count, setCount] = useState(0);
    const navigate = useRouter();
    
    useEffect(() => {
        handleIdentifiersOobi();
      }, [count]);

      const handleIdentifiersOobi = async () => {
            for(let i = 0; i<alias.length; i++){
                // console.log(alias[i].name);
                console.log("some name",await client.identifiers().get(alias[i].name));

                const oobi = await client.oobis().get(alias[i].name, 'agent');
                alias[i] = {...alias[i], 'oobi': oobi.oobis[0]};
                // console.log(oobi.oobis[0]);
                console.log(alias[i]);
                const keyState = await client.keyStates().get(alias[i].prefix);
                console.log(keyState[0].k[0]);
               
                
            }
            setCount(1);
      }

    const handleResolveOobi = async () => {
        const name2: string = document.getElementById("formBasicName")!.value;
        const oobi2: string = document.getElementById("formBasicOobi")!.value;
    
        console.log(oobi2);
        await resolveOobi(client, oobi2, name2);
        console.log(name, " has resolved", name2, "'s OOBI");
        navigate.push('/clientDetails');        
        
      };
  return (
    <div>
        {/* <KeriNav /> */}
        <div style={{display:"flex", flexDirection:"column", gap:"10px",}}>
        <div style={{flex:"1"}}>

            <ul>
              <Container>
              <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
              <Accordion.Header style={{display:"flex", flexDirection:"column"}}>Identifiers</Accordion.Header>
              <Accordion.Body>
              {alias.map(
                (ids: { name: string; prefix: string ; oobi: string}, index: number) =>
                  (
                    <li
                      key={ids.name}
                      style={{
                        backgroundColor: "#55F5F5",
                        marginBottom: "10px",
                        border: "2px solid #F5F5F5",
                        fontSize: "16px",
                        
                      }}
                    >
                      alias->{ids.name} || AID->{ids.prefix} ---
                       <Accordion defaultActiveKey="0"  >
                        <Accordion.Item eventKey="1" >
                          <Accordion.Header style={{ padding:"0"}} >OOBI</Accordion.Header>
                          <Accordion.Body style={{width:"100%", wordWrap:"break-word"}}>
                            {ids.oobi}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </li>
                  )
              )}
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>

              </Container>
            </ul>
          </div>
         <div style={{width:"100%", paddingLeft:"30px"}}>
          <Container>
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
            </Container>
          </div>
          </div>
    </div>
  )
}

export default Identifiers;