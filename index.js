//npm install express
const express = require('express');
const app = express();//istanza di express


const {persone}=require('./persone.js');
const port = 3000;
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)

const middlewareProva=require('./middleware')

app.use(middlewareProva)
//->app.use('/persone',middlewareProva)
app.get('/about',middlewareProva,(req,res)=>{
    res.send("about")
});
app.get('/',(req,res)=>{
    res.send("Homepage")
});

app.get('/about',(req,res)=>{
    res.send("about")
});


app.listen(port);