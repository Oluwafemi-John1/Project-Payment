// List of imports
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const nodemailer = require('nodemailer')
const { testing, payMoney } = require('./paystack')

// Variable Declarations
const PORT = process.env.port || 5002

// Database Connection
// require('./connection')
// require('./paystack')

// Middleware
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "oyeniranoluwafemi36@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD, // The 16-character App Password
    },
});

app.get('/sendmail', (req, res) => {
    (async () => {
        const info = await transporter.sendMail({
            from: '"Your Conscience" <devfemi3@gmail.com>',
            to: "devfemi3@gmail.com, ajewoleadeola386@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?", // Plain-text version of the message
            // html: "<b>Hello world?</b>", // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
        res.json({messageSent: info.messageId});
    })();
})

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/info', (req, res) => {
    const { name, email, password } = req.body
    const details = { name, email, password }
    res.status(201).json({ status: true, message: details })
})

app.get('/yes', testing)
app.post('/pay', payMoney)

// Server Connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

