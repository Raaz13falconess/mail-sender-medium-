const express = require("express");
const sendEmail = require("./services/mail-service");

const app = express();

app.use(express.json());

app.post("/send-mail", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }

        const html = `<p>Dear ${name}, please respond to this mail ASAP.</p>`;
        const subject = "Nodemailer Basic Guide";

        const isMailSent = await sendEmail(email, subject, html);

        res.status(201).json({ message: isMailSent });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
