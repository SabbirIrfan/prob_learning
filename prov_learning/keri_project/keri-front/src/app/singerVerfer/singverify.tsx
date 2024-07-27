import React from 'react'
import libsodium from 'libsodium-wrappers-sumo';
import { useClient } from '../store/zustand';
import signify, { SignifyClient, Verfer } from 'signify-ts';
import { Signer } from 'signify-ts';


export const singverify = async () => {
    // const client = useClient();
    // const keystate = await client.keyStates().get(aid);
    //     console.log("Key state",keystate[0].k[0]);
    //     await libsodium.ready;

        
     
    //     // console.log(signify.b(keystate[0].k[0]));
    //     console.log(keystate[0].k[0]);
    //     console.log(signify.b(keystate[0].k[0]));
    // const signer = new Signer({raw: signify.b(keystate[0].k[0]) });
    // const sttring ="hello world";
    // const signature = signer.sign(signify.b(sttring));
    // console.log(aid);
    // console.log("verifyyyyyyyyyyyyyyyy", signature.verfer?.verify(signature.raw, signify.b("sttring")));

  return (
    <div>singverify</div>
  )
}

export const sing = async (client : SignifyClient, data: string, aid: string) => {
    
    const keystate = await client.keyStates().get(aid);
        console.log("Key state",keystate[0].k[0]);
        await libsodium.ready;

        
     
       
    const signer = new Signer({raw: signify.b(keystate[0].k[0]) });
    const signature = signer.sign(signify.b(data));
    console.log(aid);
    console.log("verify", signature.verfer?.verify(signature.raw, signify.b(data)));
}