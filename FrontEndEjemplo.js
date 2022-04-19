const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");

app.listen(port, () => {
  console.log(`listening front end on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("front funcionando ok");
});

app.get("/usuarios", (req, res) => {
  fetch("http://localhost:3000/all")
    .then((response) => response.json())
    .then((data) => res.send(data));
});
