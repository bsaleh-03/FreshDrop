let express = require('express');
let app = express();
let requestClient = require('request');
let port = process.env.PORT || 8080;

// Setup webhook enpoints
app.get('/', (req, res) => {
    res.send('Webhooks are running');
});

app.get('/webhooks/signup', (request, response) => {
    console.log(request);
});

// Listen for requests
let listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
});
