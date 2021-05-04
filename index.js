import express from "express";
import path from 'path';


const __dirname = path.resolve();
const PORT = process.env.PORT ?? 4000;
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Server has been started on ${PORT} port</h1>`);
})

app.get('/api/db/', (req, res) => {
    res.append('Content-Type', 'application/json')
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.append('Access-Control-Allow-Methods', 'GET')
    res.sendFile(path.resolve(__dirname, 'static', 'db', 'db.json'));
})

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
});
