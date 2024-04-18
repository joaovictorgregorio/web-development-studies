import express from "express";
const app = express();
const port = 6500;

app.get("/", (req, res) => {
    res.send("<strong>Página principal, funcionamento OK</strong>");
});

app.get("/contato", (req, res) => {
    res.send("<strong><ul>Contato</ul></strong><li>99 99999999</li>");
});

app.get("/sobre", (req, res) => {
    res.send("<strong><h2>Sobre</h2></strong><li>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</li>");
});

app.listen(port, () => {
    console.log(`Aplicação sendo executada na porta ${port}`);
});