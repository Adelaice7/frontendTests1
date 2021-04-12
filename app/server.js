const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

const PORT = 8080;

app.use('/static', serveStatic(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html');
});

app.listen(PORT, () => console.log('Server started on port ' + PORT));
