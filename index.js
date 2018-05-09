var express = require('express');
var app = express();

app.use(express.static('public')); //Public folder name

app.listen(process.env.PORT || 3000, function(){
    console.log('server is ready!');
})