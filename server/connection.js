const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.mongo_uri

mongoose.connect()
.then(()=>{
    console.log('Yep yep connected');
})
.catch((err)=>{
    console.log('DB not connected', err);
})