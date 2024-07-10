"use client";
import ct, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useClient, useSetIds } from '../store/zustand';
import { waitOperation } from '../helper/clientUtil';
import KeriNav from '../component/Navbar';

 const  createAid = () => {
    const setIds = useSetIds();
    const client = useClient();
    let alias: string;
    useEffect(() => {
    });
    const handleCreateAid = async (event) => {
        event.preventDefault();
        alias = document.getElementById("formBasicName")!.value;

const icpResult1 = await client.identifiers().create(alias, {
        toad: 3,
        wits: [
            'BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha',
            'BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM',
            'BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX',
        ],
    });
    const { response: aid1 } = await waitOperation(
        client,
        await icpResult1.op()
    );

    let rpyResult1 = await client
        .identifiers()
        .addEndRole(alias, 'agent', client!.agent!.pre);
    await waitOperation(client, await rpyResult1.op());

    const oobi1 = await client.oobis().get(alias, 'agent');
    
    const Identifiers = await client.identifiers().list();
    setIds(Identifiers.aids);

    console.log(
      {alias}," AID: ",
      Identifiers
      ,
     icpResult1,
     "OOBI: ",
     oobi1.oobis[0]
      
    );
    // const client: signify.SignifyClient = await getOrCreateClient(bran1);
    // console.log(client.identifiers.length);
    // getOrCreateIdentifier(client, name);
    }
  return (
    <>
    <KeriNav/>
    <Container style={{width: "50%", marginTop: "100px"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Alias name</Form.Label>
        <Form.Control type="text" placeholder="Enter alias" />
        <Form.Text className="text-muted">
          AID will be created under this alias
        </Form.Text>
      </Form.Group>
      <Button onClick={handleCreateAid} variant="primary" type="submit">
        Create
      </Button>
      </Form>
      </Container>
    </>
  );
};

export default createAid;