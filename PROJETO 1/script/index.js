const express = require("express");
const app = express();
const path = require("path");

const porta = 5000;

const basePath = path.join(__dirname, "../html");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(basePath + "/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(basePath + "/contacts.html");
});

// Código para quando der erro:

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

// Abertura de servidor

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
  console.log("localhost:" + porta);
});
