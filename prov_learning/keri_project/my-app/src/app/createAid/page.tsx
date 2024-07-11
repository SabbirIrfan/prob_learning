"use client";
import ct, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useClient, useEmail, useSetIds } from '../store/zustand';
import { sleep, waitOperation } from '../helper/clientUtil';
import KeriNav from '../component/Navbar';
import { useRouter } from 'next/navigation';
import { Operation } from 'signify-ts';

const createAid = () => {
    const navigate = useRouter();
    const setIds = useSetIds();
    const client = useClient();
    const email = useEmail();
    let alias: string;
    console.log(email);
    useEffect(() => {
    });
    const handleCreateAid = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alias = document.getElementById("formBasicName")!.value;
    
        client.identifiers().create(alias, {
            toad: 3,
            wits: [
                'BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha',
                'BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM',
                'BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX',
            ]

            
        }
        ).then(async (icpResult1: { op: () => string | Operation<any> | PromiseLike<string | Operation<any>>; }) => {

            console.log("step 2");
                const { response: aid1 } = await waitOperation(client, await icpResult1.op());
    
                let rpyResult1 = await client.identifiers().addEndRole(alias, 'agent', client!.agent!.pre);
                await waitOperation(client, await rpyResult1.op());
    
                const oobi1 = await client.oobis().get(alias, 'agent');
                const Identifiers = await client.identifiers().list();
                setIds(Identifiers.aids);
    
                console.log(
                    Identifiers,
                    icpResult1,
                    "OOBI: ",
                    oobi1.oobis[0]);
                handlePost(alias, email,await aid1.i, oobi1.oobis[0]);
                
            
                
            })
            .catch((error: any) => {
                console.error(error);
            });


    };
    
    const handlePost = async (alias: string, email: string, aid: any, oobi: any) => {
        console.log("step 4", email, alias,  oobi);
        try {
            
            const response = await fetch('http://localhost:8081/create-aid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, alias: alias, aid: aid, oobiUrl: oobi })
            });
    
            if (response.ok) {
                console.log('AID created successfully');
                navigate.push('/clientDetails');
            }
        } catch (error) {
            console.error(error);
        }
    };
        return (
            <>
                {/* <KeriNav /> */}
                <Container style={{ width: "50%", marginTop: "100px" }}>
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