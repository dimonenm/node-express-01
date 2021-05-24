import fs from "fs";
import express from "express";
import path from 'path';


const __dirname = path.resolve();
const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.json({ limit: '25mb' })) // for parsing application/json

app.get('/api/db/', (req, res) => {

    res.append('Content-Type', 'application/json')
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.append('Access-Control-Allow-Methods', 'GET')
    res.sendFile(path.resolve(__dirname, 'static', 'db', 'db.json'));
});

app.options('/api/db/', (req, res) => {
    console.log('options');
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        .append('Access-Control-Allow-Methods', 'POST')
        .append('Access-Control-Allow-Headers', 'Content-Type')
        .append('Access-Control-Max-Age', 86400)
        .sendStatus(200);
});

app.post('/api/db/', (req, res) => {
    console.log('post');
    // const data = req.body;
    // console.log(JSON.stringify(data));
    fs.writeFile('./static/db/db.json', JSON.stringify(req.body), () => {console.log('data has saved')})
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        .append('Access-Control-Allow-Methods', 'POST')
        .append('Access-Control-Allow-Headers', 'Content-Type')
        .append('Access-Control-Max-Age', 86400)
        .sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
});
