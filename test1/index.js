const express = require('express');
const app = express();

app.get('/ok', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});