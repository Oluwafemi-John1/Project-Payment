// List of imports
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { testing, payMoney } = require('./paystack')

// Variable Declarations
const PORT = process.env.port || 5002

// Database Connection
// require('./connection')
// require('./paystack')

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res)=>{
    res.send('Hello World')
})
app.get('/yes', testing)
app.post('/pay', payMoney)

// Server Connection
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

