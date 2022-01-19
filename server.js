const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./src/routes')


app.use(express.json());
app.use(cors());
app.use(router)

mongoose.connect(
    'mongodb://localhost:27017/myServer'
);


app.listen(3003, () => {
    console.log('Server run')
})