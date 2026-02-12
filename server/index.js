// List of imports
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { testing, payMoney } = require('./paystack')
const { Mailing } = require('./mailer')
// const { sendResend } = require('./resend')
// Variable Declarations
const PORT = process.env.port || 5002

// Database Connection
// require('./connection')
// require('./paystack')

// Middleware
app.use(cors())
app.use(express.json())



app.get('/sendmail', Mailing)
// app.get('/resend', sendResend)

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

