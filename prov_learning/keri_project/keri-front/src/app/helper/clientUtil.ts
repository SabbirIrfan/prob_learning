import { CreateIdentiferArgs, EventResult, Operation, SignifyClient, Tier, randomPasscode, ready } from 'signify-ts';
import { resolveEnvironment } from './resolve-env';

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
export async function assertOperations(
    ...clients: SignifyClient[]
): Promise<void> {
    for (const client of clients) {
        const operations = await client.operations().list();
        // expect(operations).toHaveLength(0);
    }
}

export async function waitOperation<T = any>(
    client: SignifyClient,
    op: Operation<T> | string,
    signal?: AbortSignal
): Promise<Operation<T>> {
    if (typeof op === 'string') {
        op = await client.operations().get(op);
    }

    op = await client.operations().wait(op, { signal: signal ?? AbortSignal.timeout(30000) });
    await deleteOperations(client, op);

    return op;
}

async function deleteOperations<T = any>(
    client: SignifyClient,
    op: Operation<T>
) {
    if (op.metadata?.depends) {
        await deleteOperations(client, op.metadata.depends);
    }

    await client.operations().delete(op.name);
}

export async function resolveOobi(
    client: SignifyClient,
    oobi: string,
    alias?: string
) {
    const op = await client.oobis().resolve(oobi, alias);
    await waitOperation(client, op);
}

export async function getClient(bran: string): Promise<SignifyClient> {
    return await getOrCreateClient(bran)
    
}
// export async function getOrCreateClients(
//     count: number,
//     brans: string[] | undefined = undefined
// ): Promise<SignifyClient[]> {
//     const tasks: Promise<SignifyClient>[] = [];
//     const secrets = process.env['SIGNIFY_SECRETS']?.split(',');
//     for (let i = 0; i < count; i++) {
//         tasks.push(
//             getOrCreateClient(brans?.at(i) ?? secrets?.at(i) ?? undefined)
//         );
//     }
//     const clients: SignifyClient[] = await Promise.all(tasks);
//     console.log(`SIGNIFY_SECRETS="${clients.map((i) => i.bran).join(',')}"`);
//     return clients;
// }
export async function getOrCreateClient(
    bran: string | undefined = undefined
): Promise<SignifyClient> {
    const env = resolveEnvironment();
    await ready();
    bran ??= randomPasscode();
    bran = bran.padEnd(21, '_');
    const client = new SignifyClient(env.url, bran, Tier.low, env.bootUrl);
    try {
        await client.connect();
    } catch {
        const res = await client.boot();
        if (!res.ok) throw new Error();
        await client.connect();
    }
   
    return client;
}

export async function getOrCreateIdentifier(
    client: SignifyClient,
    name: string,
    kargs: CreateIdentiferArgs | undefined = undefined
): Promise<[string, string]> {
    let id: string;
    try {
        const identfier = await client.identifiers().get(name);
        // console.log("identifiers.get", identfier);
        id = identfier.prefix;
    } catch {
        const env = resolveEnvironment();
        kargs ??= {
            toad: env.witnessIds.length,
            wits: env.witnessIds,
        };
        const result: EventResult = await client
            .identifiers()
            .create(name, kargs);
        let op = await result.op();
        op = await waitOperation(client, op);
        // console.log("identifiers.create", op);
        id = op.response.i;
    }
    const eid = client.agent?.pre;
    if (!eid) {
        throw new Error('No agent on client');
    }
    if (!(await hasEndRole(client, name, 'agent', eid))) {
        const result: EventResult = await client
            .identifiers()
            .addEndRole(name, 'agent', eid);
        const op = await result.op();
        await waitOperation(client, op);
        // console.log("identifiers.addEndRole", op);
    }
    const oobi = await client.oobis().get(name, 'agent');
    const result: [string, string] = [id, oobi.oobis[0]];
    return result;
}
export async function hasEndRole(
    client: SignifyClient,
    alias: string,
    role: string,
    eid: string
): Promise<boolean> {
    const list = await getEndRoles(client, alias, role);
    for (const i of list) {
        if (i.role === role && i.eid === eid) {
            return true;
        }
    }
    return false;
}

export async function getEndRoles(
    client: SignifyClient,
    alias: string,
    role?: string
): Promise<any> {
    const path =
        role !== undefined
            ? `/identifiers/${alias}/endroles/${role}`
            : `/identifiers/${alias}/endroles`;
    const response: Response = await client.fetch(path, 'GET', null);
    if (!response.ok) throw new Error(await response.text());
    const result = await response.json();
    // console.log("getEndRoles", result);
    return result;
}