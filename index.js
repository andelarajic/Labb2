const express = require('express');
const app = express();

const path = require('path')
const public = path.join(__dirname, 'public')

app.use(express.json());

var counter = 0

// sendFile will go here
app.get('/', function (req, res) {
    res.sendFile(path.join(public, '/index.html'));
});

app.get('/counter/show', (req, res) => {
    res.send({text: "Current value is: " + counter})
})

app.post('/counter/add', (req, res) => {
    counter++
    res.status(201).send({text: "Added 1 to value"})
})

app.post('/random', (req, res) => {
    counter = Math.floor(Math.random() * 1001)
    res.status(201).send({text: "Generated new random value"})
})

app.post('/custom_random', (req, res) => {
    const min = Math.ceil(req.body.min);
    const max = Math.floor(req.body.max);
    counter = Math.floor(Math.random() * (max+1 - min) + min);
    res.status(201).send({text: "Generated new custom random value"})
})

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));