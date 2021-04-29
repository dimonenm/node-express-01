import express from "express";


const PORT = process.env.PORT ?? 4000;
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Server has been started on ${PORT} port</h1>`);
})

app.listen(PORT, () => {
    console.log('ok');
});
