import java.math.BigInteger;
import java.security.SecureRandom;
import java.time.LocalTime;

public class EpochTime {
    public static void main(String[] args) {
        
        BigInteger encodedTime = encodeTimeWithRandom();

        System.out.println("Encoded 128-bit time (first 32 bits are time, last 96 bits are random): " + encodedTime);

        
        decodeTimeFromEncoded(encodedTime);
    }

    public static BigInteger encodeTimeWithRandom() {
        
        LocalTime currentTime = LocalTime.now();

        // Get the current hour, minute, and second
        int hour = currentTime.getHour();  
        int minute = currentTime.getMinute();
        int second = currentTime.getSecond();

        // 32-bit integer
        int encodedTime = (hour << 12) | (minute << 6) | second;


        
        BigInteger encodedTimeBigInt = BigInteger.valueOf(encodedTime);
        // random 96-bit integer
        SecureRandom random = new SecureRandom();
        byte[] randomBytes = new byte[12]; // 12  * 8  = 96 bits
        random.nextBytes(randomBytes);
        BigInteger random96Bit = new BigInteger(1, randomBytes);

        // Shift the random 96-bit integer to the left by 32 bits
        random96Bit = random96Bit.shiftLeft(32);

        // Combine the encoded time and random 96-bit integer into a 128-bit integer
        BigInteger encodedTimeWithRandom = encodedTimeBigInt.add(random96Bit);

        return encodedTimeWithRandom;
    }

    public static void decodeTimeFromEncoded(BigInteger encodedTimeWithRandom) {
        // Extract the 32-bit encoded time
        BigInteger timeMask = BigInteger.valueOf(0xFFFFFFFF); // Mask for 32 bits
        int encodedTime = encodedTimeWithRandom.and(timeMask).intValue(); // and operation will only give me the first 32 bit of the encoded number

        // Decode the hour, minute, and second
        int hour = (encodedTime >> 12) & 0b11111; 
        int minute = (encodedTime >> 6) & 0b111111; 
        int second = encodedTime & 0b111111; 

        // Print the decoded time
        System.out.println("Decoded time - Hour: " + hour + ", Minute: " + minute + ", Second: " + second);

        // Extract the 96-bit random integer
        BigInteger random96Bit = encodedTimeWithRandom.shiftRight(32);

        
        System.out.println("Random 96-bit integer: " + random96Bit);
    }
}
