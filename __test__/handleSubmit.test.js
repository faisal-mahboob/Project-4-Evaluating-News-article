
import { testElement } from 'domutils';
import expectExport from 'expect';
const fetch = require('node-fetch');
var path = require('path')
const express = require('express')
//const webpack= require('webpack')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
import {handleSubmit} from '../src/client/js/formHandler.js'
import{data} from '../src/client/js/formHandler.js'
import{testing} from '../src/client/js/formHandler.js'

//const t11=document.getElementById('user').nodeValue;
//let t1=document.getElementById('user').value;
//const handleSumbit = require('./src/client/index.js/handleSubmit');
describe("Testing the fetch function",()=>{
    //console.log(t1);
    let data="https://imgur.com/";
    let output="general_en";
    let cData={
        status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '19688' },
        model: 'general_en',
        score_tag: 'N',
        agreement: 'AGREEMENT',
        subjectivity: 'OBJECTIVE',
        confidence: '100',
        irony: 'NONIRONIC'};

    test("check if the handlesubmit function is defined",()=>{
        fetch('http://localhost:8085/getdata',{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({data})
            })
            .then(res=>res.json())
            .then(function(cData){
                console.log('this is the data');
                console.log(cData);
                document.getElementById("mod").innerHTML=cData.model;
                return cData.model
            });

            expect(cData.model).toBe(output);
        });
    });