var express = require('express');

var app = express();
var parser = require('body-parser');

require('./database.js');

app.use(express.static(__dirname + '/../.tmp'))
app.get('/',function(req,res){
  res.render('./../app/index.ejs', {});
});

console.log("App is listening on port 8080");
app.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);