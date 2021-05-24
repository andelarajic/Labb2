const express = require("express");
const app = express()
const path = require('path');
const public = path.join(__dirname, 'public');
let counter = 0;

app.get('/', function (req, res) {
   res.sendFile(path.join(public, 'html.html'));
});

app.get('/index', (req, res) => {
   res.send("We have had " + ++counter + " visits");
});


app.listen(4000)