const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //res.json(req.headers);
    res.statusCode = 401;
    res.header('Access-Control-Allow-Origin', '*');
    res.send('<h2>Cristian</h2>');
});

app.listen(port, () => {
    console.log(`App listening at htttp://localhost:${port}`);
});
