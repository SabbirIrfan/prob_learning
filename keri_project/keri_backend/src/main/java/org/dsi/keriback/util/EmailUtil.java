package org.dsi.keriback.util;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendOtpEmail(String email, String otp) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("Verify OTP");
        mimeMessageHelper.setText("""
        <div>
            <h3> your otp is %s</h3>
             <h3> click image to verify</h3>  
               
          <a href="http://localhost:8080/verify-account?email=%s&otp=%s" target="_blank">
           <img src="https://img.freepik.com/premium-vector/vector-illustration-green-verified-stamp-icon_666746-38.jpg?w=740" alt="Green Verified Stamp">
          </a>
        </div>
        """.formatted(otp,email, otp), true);

        javaMailSender.send(mimeMessage);
    }
}