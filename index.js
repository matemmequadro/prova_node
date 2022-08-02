//npm install express
const express = require('express');
const app = express();//istanza di express

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const {persone}=require('./persone.js');
const port = 3000;
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)
app.get('/api/persone/',(req,res)=>{
    res.status(200).json({success:true,data:persone})
   
})
app.get('/api/persone/:id',(req,res)=>{
    const{id}=req.params
    const persona=persone.find(
        (persona)=>persona.id===id
    )
    res.json(persona)
   
})
app.post('/api/persone/',(req,res)=>{
    console.log(req.body)
    const persona=req.body
    persone.push(persona)
    res.status(200).json({success:true,data:persone})
})
app.put('/api/persone/:id',(req,res)=>{
    const{id}=req.params
    const persona=req.body
    persone[Number(id)-1]=persona
    res.status(200).json({success:true,data:persone})
})





app.listen(port);