//npm install express
//localhost:3000
// => console.log(`Example app listening on port ${port}!`)

const express = require('express');
const app = express();//istanza di express
const personeRouter=require('./routes/persone')
const port = 3000;

app.use(express.json())

app.use('/api/persone',personeRouter)



app.listen(port);