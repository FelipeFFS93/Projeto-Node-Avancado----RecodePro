const express = require('express'); 
const bodyParser =require('body-parser');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', 'App/views')


const caminho = require('./App/routes/routes') 
app.use(caminho);

app.listen(1900, () => {
    console.log("Servidor ok")
} )


