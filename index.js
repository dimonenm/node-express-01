import express from "express";


const PORT = process.env.PORT ?? 4000;
const app = express();

app.get('/', (req, res) => {
    console.log('req:', req);
    // console.log("res", res);
})

app.listen(PORT, () => {
    console.log('ok');
});
