import express from "express";
const app = express();
const port = 3000;

// Hospedagem da página principal
app.get("/", (req, res) => { 
    res.send("<h1>Home Page</h1>");
});

//
app.post("/registro", (req, res) => { 
    res.sendStatus(201);
});

//
app.put("/user/joaovictor", (req, res) => { 
    res.sendStatus(200);
});

//
app.patch("/user/joaovictor", (req, res) => { 
    res.sendStatus(200);
});

//
app.delete("/user/joaovictor", (req, res) => { 
    res.sendStatus(200);
});

// Funcionamento do servidor, localização da porta.
app.listen(port, () => { 
    console.log(`Servidor em funcionamento na porta ${port}`);
});

