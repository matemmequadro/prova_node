
//npm install express
const express = require('express');
const app = express();//istanza di express


const {persone}=require('./persone.js');
const port = 3000;
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)


/*
json->strutturare dati con un identificativo
*/
app.get('/',(req,res)=>{
    res.json(persone);
})

app.listen(port);