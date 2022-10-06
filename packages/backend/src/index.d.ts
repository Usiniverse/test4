import express from "express";
const app = express();
const port = 8000;

app.get('/', (req: express.Require, res: express.Response) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});