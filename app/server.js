const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html');
});

app.listen(PORT, () => console.log('Server started on port ' + PORT));
