const https = require('https')
require('dotenv').config()
const app = require('express')()
// console.log(params);


const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
        Authorization: process.env.pay_secret,
        'Content-Type': 'application/json'
    }
}

const testing = (req, res) => {
    res.send('Hi')
}

const payMoney = (request, response) => {
    const { email, amount } = request.body
    // console.log(email);
    // console.log(amount);
    const params = JSON.stringify({
        "email": email,
        "amount": amount
    })
    const req = https.request(options, res => {
        let data = ''

        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            console.log(JSON.parse(data))

            let info = JSON.parse(data)
            response.status(201).json({result: info})
        })
    }).on('error', error => {
        console.error(error)
    })

    req.write(params)
    req.end()
}

module.exports = { payMoney, testing }

