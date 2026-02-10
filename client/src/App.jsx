import React from 'react'
import axios from 'axios'
import PaystackPop from '@paystack/inline-js'

const App = () => {
    const endpoint = 'http://localhost:5456/'
    const endpoint2 = 'http://localhost:5456/pay'
    // const endpoint3 = 'http://localhost:5456/yes'

    const makeRequest = () => {
        axios.get(endpoint)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const payMoney = () => {
        axios.post(endpoint2, { email: 'oyeniranoluwafemi36@gmail.com', amount: 55000 })
            .then((result) => {
                const access_code = result.data.result.data.access_code
                const popup = new PaystackPop()
                popup.resumeTransaction(access_code)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <h1>Frontend and Backend Jollification</h1>
            <button onClick={makeRequest}>Make request</button>
            <button onClick={payMoney}>pay</button>
        </>
    )
}

export default App