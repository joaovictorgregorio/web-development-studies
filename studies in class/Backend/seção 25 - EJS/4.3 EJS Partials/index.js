import express from "express";

const aplicacao = express();
const porta = 3000;

// Para aplicar o CSS na aplicação
aplicacao.use(express.static("public"));

aplicacao.get("/", (req, res) => {
  res.render("index.ejs");
});

aplicacao.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

aplicacao.get("/about", (req, res) => {
  res.render("about.ejs");
});

aplicacao.listen(porta, () => {
  console.log(`Servidor em funcionamento na porta ${porta}`);
});
