
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
    res.send("<h1>Homepage</h1> <a href='/persone'> Vai a persone</a>")
})

app.get('/persone',(req,res)=>{
    const NewPersona=persone.map((persona)=>{
        const{nome,cognome,eta}=persona;
        return {nome,cognome,eta};
    })
    res.json(NewPersona);
});

app.get('/persone/:id',(req,res)=>{
    console.log(req.params);
    const persona=persone.find((persona)=>persona.id===req.params.id)
    res.json(persona);
});
app.listen(port);