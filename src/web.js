var express = require('express');
var Agendash = require('agendash2');
var agenda = require("./agenda");

var app = express();
const port = 80;

app.use('/', Agendash(agenda));

app.get('/add', function (req, res) {
    agenda.now('TestJob', { count: 1 });
    res.json({ success: true })
})

app.listen(port, ()=>{
    console.log("listening: "+port)
})
