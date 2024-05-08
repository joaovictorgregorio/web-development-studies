import express from "express";
import bodyParser from "body-parser";

const aplicacao = express();
const porta = 3000;

// Executa a leitura das páginas estáticas CSS
aplicacao.use(express.static("public"));

aplicacao.use(bodyParser.urlencoded({ extended: true }));

// Renderiza a página, quando o usuário acessar
aplicacao.get("/", (req, res) => {
    res.render("home.ejs");
});

aplicacao.post("/home", )

aplicacao.listen(porta, () => {
    console.log(`Funcionando na porta ${porta}`);
});