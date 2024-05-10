import express from "express";
import bodyParser from "body-parser";

var aplicacao = express();
var porta = 4000;

aplicacao.use(express.static("public"))

aplicacao.use(bodyParser.urlencoded({ extended: true }));

aplicacao.get("/", (req, res) => {
    res.render("index.ejs");
});

aplicacao.get("/home", (req, res) => {
    console.log(`Usuário acessou o home!`)
});


aplicacao.listen(porta, () => {
    console.log(`Funcionando na porta ${porta}`);
});