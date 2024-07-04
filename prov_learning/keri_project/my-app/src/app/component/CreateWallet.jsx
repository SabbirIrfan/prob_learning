import React from 'react'

import signify,{Serder} from 'signify-ts';
export async function resolveOobi() {
    const op = await client.oobis().resolve(oobi, alias);
    await waitOperation(client, op);
}
const url = 'http://127.0.0.1:3901';
const bootUrl = 'http://127.0.0.1:3903';
export default  async function CreateWallet() {
    await signify.ready();
    const bran1 = signify.randomPasscode();
    const bran2 = signify.randomPasscode();
    const client1 = new signify.SignifyClient(
        url,
        bran1,
        signify.Tier.low,
        bootUrl
    );
    const client2 = new signify.SignifyClient(
        url,
        bran2,
        signify.Tier.low,
        bootUrl
    );
    await client1.boot();
    await client2.boot();
    await client1.connect();
    await client2.connect();
    const state1 = await client1.state();
    const state2 = await client2.state();
    console.log(
        'Client 1 connected. Client AID:',
        state1.controller.state.i,
        'Agent AID: ',
        state1.agent.i
    );
    console.log(
        'Client 2 connected. Client AID:',
        state2.controller.state.i,
        'Agent AID: ',
        state2.agent.i
    );

  return (
    <div>CreateWallet</div>
  )
}
