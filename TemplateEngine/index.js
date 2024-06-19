const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c", "item d", "item e"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Titulo do post",
    category: "post",
    content: "Conteudo do post",
    author: "Matheus",
    date: "12/02/2021",
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Titulo do post",
      category: "post",
      content: "Conteudo do post",
      author: "Matheus",
      date: "12/02/2021",
    },
    {
      title: "Titulo do post",
      category: "post",
      content: "Conteudo do post",
      author: "Matheus",
      date: "12/02/2021",
    },
    {
      title: "IHHH do post",
      category: "post",
      content: "Conteudo do post",
      author: "Matheus",
      date: "12/02/2021",
    },
    {
      title: "Titulo do post",
      category: "post",
      content: "Conteudo do post",
      author: "Matheus",
      date: "12/02/2021",
    },
  ];
  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    name: "matheus",
    surname: "Battisti",
  };

  const palavra = "EAE";

  const auth = false;

  res.render("home", { user: user, palavra, auth });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
