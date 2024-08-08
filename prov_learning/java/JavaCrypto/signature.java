import java.security.*;  
import java.util.Base64;
import java.nio.charset.*;  


public class signature {

    public static void main(String[] args) throws Exception{
        KeyPairGenerator  kpg = KeyPairGenerator.getInstance("RSA");

        kpg.initialize(2048);

        KeyPair kp = kpg.generateKeyPair();
        PrivateKey privateKey = kp.getPrivate();
        PublicKey publicKey = kp.getPublic();
        String message = "Hello, World!";

        byte[] messageBytes = message.getBytes(StandardCharsets.UTF_8);


        Signature rsa = Signature.getInstance("SHA256withRSA");
        rsa.initSign(privateKey);
        rsa.update(messageBytes);
        byte[] signature = rsa.sign();

        System.out.println("Signature: " + Base64.getEncoder().encodeToString(signature));

        rsa.initVerify(publicKey);
        rsa.update(messageBytes);
        boolean verified = rsa.verify(signature);
        System.out.println("Verified: " + verified);

        

    }

}