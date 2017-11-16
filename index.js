var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = prosses.env.DISCORD_WEBHOOK;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/webhook', (req, res) => {
  request({
    method: 'POST',
    url.webhook,
    json: {
      "content": req.body.msg,
      "username": "Huggu_Bot",
   }
  res.redirect
});

app.listen(80, () => {
  console.log("server started")
});
