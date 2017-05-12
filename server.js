var express = require('express');

//Create App
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});

app.use(express.static('public'));
