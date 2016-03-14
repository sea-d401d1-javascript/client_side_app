const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.listen(5000, () => console.log('server up on port 5000'));
