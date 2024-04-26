const express       = require("express");
const app           = express();
const db            = require("./db/conection");
const bodyPerser    = require("body-parser");

const port = 3000;

app.listen(port, function(){
    console.log(`O Express está funcionando na porta ${port}`)
});

// body parser

app.use(bodyPerser.urlencoded({extended: false}))



//db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao conectar", err);
    }); 

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando 4")
});

// jobs routes
app.use('/jobs', require('./routes/jobs'))