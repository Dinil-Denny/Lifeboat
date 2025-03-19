import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendOTPEmail = async(email:string,otp:string) => {
    //configuring transporter
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth : {
            user: process.env.AUTH_MAIL,
            pass: process.env.AUTH_PASS
        }
    });
    //Email details
    const mailOptions = {
        from:process.env.AUTH_MAIL,
        to : email,
        subject : "Verify your OTP",
        html : `<p>Enter <strong>${otp}</strong> to verify your account(OTP expires in 5 mins)</p>`
    };
    
    await transporter.sendMail(mailOptions);
};

export default sendOTPEmail;