const express = require('express');
const app = express();
const requestClient = require('request');
const port = process.env.PORT || 8080
const host = "0.0.0.0";

// Setup webhook enpoints
app.get('/', (req, res) => {
    res.send('Webhooks are running');
});

app.get('/webhooks/signup', (request, response) => {
    console.log(request);
});

// Listen for requests
app.listen(port, host);

console.log('Your app is listening on port ' + port);
