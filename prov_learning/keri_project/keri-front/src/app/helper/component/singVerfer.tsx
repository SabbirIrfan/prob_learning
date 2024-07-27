// import { base64_variants, to_base64 } from "libsodium-wrappers-sumo";
// import { Siger, Signer, Verfer } from "signify-ts";

// // Example function to demonstrate signing and verifying
// async function signAndVerifyExample() {
//     // Example string to be signed
//     const message = 'This is a message to be signed';
//     const messageUint8Array = new TextEncoder().encode(message);

//     // Example private key (32 bytes, base64 encoded)
//     const privateKeyBase64 = 'your_base64_encoded_private_key_here'; // Replace with actual base64 encoded private key
//     const privateKey = to_base64(privateKeyBase64, base64_variants.URLSAFE).toString(privateKeyBase64);

//     // Initialize Signer with the private key
//     const signer = new Signer({ raw: privateKey, code: 'A' }); // 'A' is the code for Ed25519

//     // Sign the message
//     const signature = signer.sign(messageUint8Array) as Siger;
//     console.log('Signature:', signature.qb64); // Assuming qb64 format for printing

//     // Example public key (32 bytes, base64 encoded)
//     const publicKeyBase64 = 'your_base64_encoded_public_key_here'; // Replace with actual base64 encoded public key
//     const publicKey = base64ToUint8Array(publicKeyBase64);

//     // Initialize Verfer with the public key
//     const verfer = new Verfer({ raw: publicKey, code: 'A' });

//     // Verify the signed message
//     const isValid = verfer.verify(signature.qb64b, messageUint8Array);
//     if (isValid) {
//         console.log('Signature is valid');
//     } else {
//         console.log('Signature is invalid');
//     }
// }

// export default signAndVerifyExample;
