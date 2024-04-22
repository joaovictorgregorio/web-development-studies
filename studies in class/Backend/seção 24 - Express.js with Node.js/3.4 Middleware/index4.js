/* Desafio do módulo 3.4 Middleware */

import express from "express";
import { dirname }  from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var aplicacao = express();
var porta = 4500;
var diretorio = dirname(fileURLToPath(import.meta.url));
var nomeDaBanda = "";

// Analisa o aplicativo
aplicacao.use(bodyParser.urlencoded({ extended : true }));

function geradorDeNomesDasBandas (req, res, next) {
  console.log(req.body);
  nomeDaBanda = req.body["street"] + " " + req.body["pet"];
  next();
}

aplicacao.use(geradorDeNomesDasBandas);

aplicacao.get("/", (req, res) => {
  res.sendFile(diretorio + "/public/home_page.html");
});

aplicacao.post("/submit", function(req, res) {
  res.send(`<h1>Sua banda se chama: </h1><h3>${nomeDaBanda} 🫶🏾</h3>`);
});

aplicacao.listen(porta, () => {
  console.log(`Servidor em funcionamento na porta ${porta}`);
});
