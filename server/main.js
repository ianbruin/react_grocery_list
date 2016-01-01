var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../.tmp'))
app.get('/',function(req,res){
  res.render('./../app/index.ejs', {});
});

console.log("App is listening on port 8080");
app.listen(7777);