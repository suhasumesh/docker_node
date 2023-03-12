const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.status(200).send("Hello, testing Docker with node edited");
});

app.listen(8080,()=>{
    console.log("Server Listening in port 8080");
})