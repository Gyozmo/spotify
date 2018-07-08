let express = require('express');

let app = express();

app.get('/', function(){
    res.render('index.ejs')
})