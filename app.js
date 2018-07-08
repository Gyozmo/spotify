let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res){
    res.render('index.ejs')
});

app.listen(3000, function(){
    console.log('test on 3000 ');
    
})