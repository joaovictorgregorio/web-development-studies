import expres from "express";

var app = expres();
var port = 3000;

app.get("/", function (req, res) {
    var dataAtual = new Date();
    var diaSemanaNumero = dataAtual.getDay();

    var mensagemSemana = "é um dia da semana, é hora de trabalhar pesado!"
    var menssagemFimDeSemana = "é fim de semana, é hora de descansar e pegar mais leve!";

    if (diaSemanaNumero === 0 || diaSemanaNumero === 6) {
        res.render("index.ejs", {
            mensagem: menssagemFimDeSemana,
        });
    }
    else {
        res.render("index.ejs", {
            mensagem: mensagemSemana,
        });
    }
});

app.listen(port, () => {
    console.log(`Em funcionamento na porta ${port}`);
});