import express from "express";
const app = express();
const port = 6500;

app.get("/", (req, res) => {
    res.send("Olá, bem-vindo...");
});

app.listen(port, () => {
    console.log(`Aplicação sendo executada na porta ${port}`);
});