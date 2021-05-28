import fs from "fs";
import express from "express";
import path from 'path';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.json({ limit: '25mb' })) // for parsing application/json

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'exp', 'index.html'));
});
app.get('/static/css/main.e90a555f.chunk.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'exp', 'static', 'css', 'main.e90a555f.chunk.css'));
});
app.get('/static/js/2.cd979bb9.chunk.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'exp', 'static', 'js', '2.cd979bb9.chunk.js'));
});
app.get('/static/js/main.34801c8a.chunk.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'exp', 'static', 'js', 'main.34801c8a.chunk.js'));
});


app.get('/api/db/', (req, res) => {
    res.append('Content-Type', 'application/json')
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    // res.append('Access-Control-Allow-Origin', 'http://localhost')
    res.append('Access-Control-Allow-Methods', 'GET')
    res.sendFile(path.resolve(__dirname, 'static', 'db', 'db.json'));
});

app.options('/api/db/', (req, res) => {
    console.log('options');
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        // .append('Access-Control-Allow-Methods', 'POST')
        .append('Access-Control-Allow-Headers', 'Content-Type')
        // .append('Access-Control-Max-Age', 86400)
        .sendStatus(200);
});

app.post('/api/db/', (req, res) => {
    console.log('post');
    fs.writeFile('./static/db/db.json', JSON.stringify(req.body), () => {console.log('data has been saved')})
    res
        .append('Access-Control-Allow-Origin', 'http://localhost:3000')
        // .append('Access-Control-Allow-Methods', 'POST')
        // .append('Access-Control-Allow-Headers', 'Content-Type')
        // .append('Access-Control-Max-Age', 86400)
        .sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
});