const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static(`public`));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000!");
});

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

app.get("/attori", function (req, res) {
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  const arr_attori = attori.map((att) => {
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;
    return { id, nome, cognome };
  });
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });
  if (typeof attr === "undefined") {
    res.status(400).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});
