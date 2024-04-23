import expres, { application } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var aplicacao = expres();
var porta = 5000;
var senhaCorreta = "EuAmoProgramar";

// Auxilia o caminho correto para acessar o arquivo html index.
var caminhoArquivo = dirname(fileURLToPath(import.meta.url));

// Analisa o aplicativo.
aplicacao.use(bodyParser.urlencoded({ extended: true }));

function permissaoDeAcesso(req, res, next) {
    console.log(req.body);
    if (req.body["password"] === senhaCorreta) {
        res.sendFile(caminhoArquivo + "/public/secret.html");
        next();
    }
    else {
        res.sendFile(caminhoArquivo + "/public/index.html");
    }
}

aplicacao.use(permissaoDeAcesso);

aplicacao.get("/", (req, res) => {
    res.sendFile(caminhoArquivo + "/public/index.html");
});

aplicacao.post("/check", (req, res) => {
    res.sendFile(caminhoArquivo + "/public/secret.html");
});

aplicacao.listen(porta, (req, res) => {
    console.log(`Servidor funcionando na porta ${porta}`);
});
