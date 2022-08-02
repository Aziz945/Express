


const express = require('express');

const app =express();

const logger =require('./middleware/logger')

app.use(logger)

app.use(express.json())

app.use(express.static(__dirname + '/Home'))


const PORT = 5000 ;
app.listen(PORT,(err)=>{
    err ? console.log(err) :
    console.log(`the server is running on  ${PORT}`);
})