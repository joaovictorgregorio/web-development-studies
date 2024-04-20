import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Método de solicitação: ", req.method);
  console.log("URL de solicitação: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h2>Seja bem vindo</h2>");
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
