const express = require('express');
const app = express();// gerencia as rotas


app.use('./routes')



app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000!");
});