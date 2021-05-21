import express from "express";
import path from 'path';


const __dirname = path.resolve();
const PORT = process.env.PORT ?? 4000;
const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     next();
// });

// app.get('/', (req, res) => {
//     res.send(`<h1>Server has been started on ${PORT} port</h1>`);
// })

// app.use(cors());

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
    console.log('req.body: ', req);
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.append('Access-Control-Allow-Methods', 'POST')
    res.send('POST request is OK');
    
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
});
