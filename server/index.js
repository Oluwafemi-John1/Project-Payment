// List of imports
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { testing, payMoney } = require('./paystack')
const { Mailing } = require('./mailer')
const { sendResend } = require('./resend')
const { uploadMedia } = require('./cloud')
// Variable Declarations
const PORT = process.env.port || 5002

// Database Connection
// require('./connection')
// require('./paystack')

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())



app.get('/sendmail', Mailing)
app.get('/resend', sendResend)
app.post('/media', uploadMedia)

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/info', (req, res) => {
    const { name, email } = req.body
    const details = { name, email }
    res.status(201).json({ status: true, message: details })
})

app.get('/yes', testing)
app.post('/pay', payMoney)

// Server Connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

