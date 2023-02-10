var express = require('express');
var cors = require('cors');
var autocompleteService=require("./services/autocompleteService");

var app = express();
const PORT = process.env.PORT||8080;
const HOST = '127.0.0.1';
const VERSION = "1.23.02.10.06"

app.use(express.json());
app.use(cors());

app.get('/', async function (req, res, next) {
    try { 
        res.setHeader('Content-Type', 'application/json');
        let data = {
            message: "Hello world!!!",
            version: VERSION
        }
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.get('/version', async function (req, res, next) {
    try { 
        res.end(JSON.stringify({ "version": VERSION }));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.post('/security/suggest', async function (req, res, next) {
    try {
        console.log(req.body.input)
        res.setHeader('Content-Type', 'application/json');
        let data = await autocompleteService.securityRequirementsSuggest(req);
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.post('/domain/suggest', async function (req, res, next) {
    try {
        console.log(req.body.input)
        res.setHeader('Content-Type', 'application/json');
        let data = await autocompleteService.domainRequirementsSuggest(req);
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(400).send(JSON.stringify(error));
    }
});

app.listen(PORT, () => {
    console.log('Running version ' + VERSION + ` on http://${HOST}:${PORT}`);
});


// app.listen(PORT, HOST, () => {
//     console.log(`Running on http://${HOST}:${PORT}`);
// });