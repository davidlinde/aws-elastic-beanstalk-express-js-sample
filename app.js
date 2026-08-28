const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Bonjour le monde!'));

app.listen(port, '0.0.0.0');
console.log(`App running on http://localhost:${port}`);
