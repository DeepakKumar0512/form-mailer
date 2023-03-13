const connectToMongo =require('./db');
const express = require('express');
var cors = require("cors")
const path =require("path");
require('dotenv').config()
connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/form',require('./routes/form'))

__dirname =path.resolve()
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'./client/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client','build','index.html'))
  })
}
// app.get("/",(req,res)=>{
//     res.send("Backend")
// })

app.listen(port, () => {
    console.log(`Backend listening at ${port}`)
  })  