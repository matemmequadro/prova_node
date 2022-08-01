//npm install express
const express = require('express');
const app = express();//istanza di express


const {persone}=require('./persone.js');
const port = 3000;
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)

app.get('/api/persone',(req,res)=>{
    res.status(200).json({data:persone})
})

app.listen(port);