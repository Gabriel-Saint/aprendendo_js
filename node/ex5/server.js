const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("hello world >>>>>>>>dddddddd!");
});

app.listen(3000, ()=>{
    console.log('servidor executando na porta 3000');
});