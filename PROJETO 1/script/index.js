const express = require("express");
const app = express();
const routes = express.Router;
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

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
  console.log("localhost:" + porta);
});
