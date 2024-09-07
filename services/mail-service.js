const nodemailer = require('nodemailer');
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, 
    secure: false,
    auth: {
        user: process.env.app_email,
        pass: process.env.app_password 
    }
});

const sendEmail = async(to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: 'Saumya Bhardwaj', 
            to: to,
            subject: subject, 
            html: html, 
        });

        console.log('Email sent: %s', info.messageId);
    } 
    catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;

