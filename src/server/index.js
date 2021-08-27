const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//const webpack= require('webpack')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require('aylien_textapi');

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });
var apiK = process.env.API_KEY;
//process.env.API_KEY;

const fetch = require('node-fetch');
//const aylien = require('aylien_textapi');
//const apiK=process.env.API_KEY;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
//let apiKey= "3b072e0c45741aa4846493f9d3a8366b&lang=en&url="

app.post('/getdata', async (req, res) => {
    const url = req.body.data;
    console.log("This is the site");
    console.log(url);
    console.log(`Your api key is ${process.env.API_KEY}`);
    //console.log(baseURL+apiK+url)
    //const request = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=3b072e0c45741aa4846493f9d3a8366b&lang=en&url=https://imgur.com/')
    // credentials:'cross-origin
    const response = await fetch(`${baseURL}${process.env.API_KEY}&lang=en&url=${url}`, { method: 'POST' })
    try {
        const cData = await response.json();
        console.log(cData);
        res.send(cData);
    }
    catch (error) {
        console.log('error', error)
    }
})

