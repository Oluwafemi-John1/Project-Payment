import React from 'react'
import axios from 'axios'
import PaystackPop from '@paystack/inline-js'
import { useState } from 'react'
import "./App.css"

const App = () => {
    const endpoint = 'http://localhost:5456/'
    const endpoint2 = 'http://localhost:5456/pay'
    // const endpoint3 = 'http://localhost:5456/yes'
    const endpoint4 = 'http://localhost:5456/info'

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const []

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

    const submitDetails = () => {
        if (!name) {
            alert("PLease input your name")
        }
        else if(!email){
            alert("Please input your mail")
        }
        else if (!password) {
            alert("Please input password")
        }
        else if(!password.length > 7){
            alert("please use a password minimum of 8 characters")
        }
        else{
            const information = { name, email, password }
            axios.post(endpoint4, information)
            .then((result) => {
                console.log(result);
                if(result.status === 201) {
                    alert('successfully signed up')
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <h1>Frontend and Backend Jollification</h1>
            <button onClick={makeRequest}>Make request</button>
            <button onClick={payMoney}>pay</button>
            <hr />
            <input onChange={(e) => { setname(e.target.value) }} type="text" placeholder='Name' value={name} />
            <input onChange={(e) => { setemail(e.target.value) }} type="text" placeholder='Email' value={email} />
            <input onChange={(e) => { setpassword(e.target.value) }} type="text" placeholder='Password' value={password} />
            <button onClick={submitDetails}>Submit</button>
            {/* {alertDialogue? <div className="alertParent">
                <div className="customAlert">
                
                </div>
            </div>: null} */}
        </>
    )
}

export default App