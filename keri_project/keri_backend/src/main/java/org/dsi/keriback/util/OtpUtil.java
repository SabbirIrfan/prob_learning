package org.dsi.keriback.util;

import java.util.Random;
import org.springframework.stereotype.Component;

@Component
public class OtpUtil {

    public String generateOtp() {
        Random random = new Random();
        int randomNumber = random.nextInt(99999);
        StringBuilder output = new StringBuilder(Integer.toString(randomNumber));

        while (output.length() < 5) {
            output.insert(0, "0");
        }
        return output.toString();
    }
}