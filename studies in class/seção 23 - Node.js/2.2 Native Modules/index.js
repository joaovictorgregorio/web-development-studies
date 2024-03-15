// Importando os módulos nativos do Node
const fs = require("fs");

// Utilizando o writeFile para criação de arquivos, neste caso foi criado o arquivo message.txt com o conteúdo "Olá Node..."
fs.writeFile("message.txt", "Olá Node, João Victor falando aqui meu brother!", (err) => {
    if (err) throw err;
    console.log('O arquivo foi salvo!');
  });

// Utilizando readFile para leitura de arquivos, neste caso ele retorna o conteúdo dentro do ./message.txt
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });