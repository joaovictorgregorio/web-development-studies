// Comando para ter acesso ao módulo do Node.js, neste caso, File system.
const fs = require("fs");

data = "Quando estiver triste, lembre-se de Deus e o quanto ele tem a te proporcionar";

fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log("O arquivo foi salvo!");
});


fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

