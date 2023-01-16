const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world! Welcome to my Project');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Express API is listening on on on on ${port}`);
});

const requireJsonContent = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            res.status(400).send(`Server mintanya application/json`);
        } else {
            next();
        }
    };
};
app.post('/', requireJsonContent(), (req, res, next) => {
    res.send(`You sent JSONNNNN`);
});

