// import React from "react";
// import { Button, Form ,Container} from "react-bootstrap";
// import { useEmail, useSetOobiUrl, useSetAgentAid, useSetAid, useSetName } from "./store/zustand";
// import { useNavigate } from "react-router-dom";
// import signify from "signify-ts";
// import { sleep, waitOperation } from "./helper/clientUtil";
// import { resolveEnvironment } from './helper/resolve-env';

// const { url, bootUrl } = resolveEnvironment();

// export const CreateWallet = () => {
//   const navigate = useNavigate();
//   const Email = useEmail();
//   const setName = useSetName();
//   const setAid =useSetAid();
//   const setAgentAid = useSetAgentAid();
//   const setOobiUrl = useSetOobiUrl();
//   const handleCreatingWallet = async () => {
//     const name = document.getElementById("formBasicName").value;
//     setName(name);
//     await signify.ready();
//     const bran1 = signify.randomPasscode();
//     const client1 = new signify.SignifyClient(
//       url,
//       bran1,
//       signify.Tier.low,
//       bootUrl
//     );

//     await client1.boot();
//     await client1.connect();
//     const state1 = await client1.state();
//     // const challenge1_small = await client1.challenges().generate(128);
//     // console.log(challenge1_small)

//     const icpResult1 = await client1.identifiers().create('alice', {
//         toad: 3,
//         wits: [
//             'BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha',
//             'BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM',
//             'BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX',
//         ],
//     });
//     const { response: aid1 } = await waitOperation(
//         client1,
//         await icpResult1.op());
//     sleep(6000);
  
    
//     let rpyResult1 = await client1
//     .identifiers()
//     .addEndRole('alice', 'agent', client1!.agent!.pre);
// await waitOperation(client1, await rpyResult1.op());  

// console.log("Alice's AID:", icpResult1);
//     console.log(
//       "Client 1 connected. Client AID:",
//       state1.controller.state.i,
//       "Agent AID: ",
//       state1.agent.i,
//       client1.oobis().client.url,
//     //   icpResult1,
//     //   client1.oobis().get('alice','agent')
      
//     );
//     setAid(state1.controller.state.i);
//     setAgentAid(state1.agent.i);
//     setOobiUrl(client1.oobis().client.url);
//     try {
//       const response = await fetch("http://localhost:8081/createWallet", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: Email,
//           name: name,
//           aid: state1.controller.state.i,
//           agentAid: state1.agent.i,
//           oobiUrl: client1.oobis().client.url,
//         }),
//       });

//       if (response.ok) {
//         console.log("walletCreation Successfull");
//         navigate("/clientdetails");
//       } else {
//         console.error("wallet could not be created. try again");
//       }
//     } catch (error) {
//       console.error("Error occurred while making API call:", error);
//     }
//   };

//   return (
//     <Container style={{width: "50%", marginTop: "100px"}}>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Enter Wallet Name</Form.Label>
//           <Form.Control type="text" placeholder="Name here" />
//           <Form.Text className="text-muted">
//             Wallet will be created under this name
//           </Form.Text>
//         </Form.Group>

//         <Button onClick={handleCreatingWallet}>create wallet</Button>
//       </Form>
//     </Container>
//   );
// };