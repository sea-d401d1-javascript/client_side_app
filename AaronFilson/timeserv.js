const express = require('express');
const app = module.exports = exports = express();
const timeRouter = require(__dirname + '/routes/timeRouter');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/time');
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');

  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/time', timeRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
