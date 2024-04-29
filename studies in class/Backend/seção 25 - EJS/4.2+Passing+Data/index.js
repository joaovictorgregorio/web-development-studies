import express from "express";
import bodyParser from "body-parser";

const aplicacao = express();
const porta = 4500;

aplicacao.use(bodyParser.urlencoded({ extended: true }));

aplicacao.get("/", (req, res) => {
  res.render("index.ejs");
});

aplicacao.post("/submit", (req, res) => {
  var numeroCaracteres = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numeroDeCaracteres: numeroCaracteres });
});

aplicacao.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`);
});