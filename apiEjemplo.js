const express = require("express");
const app = express();
const port = 3000;

let usuarios = [
  {
    id: "1",
    nombre: "norberto",
  },
  {
    id: "2",
    nombre: "lucia",
  },
];

app.get("/all", (req, res) => {
  res.send(usuarios);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
