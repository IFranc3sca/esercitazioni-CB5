const express = require("express");
const fs = require("fs");
const app = express();

// importante per post
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000!");
});

app.get("/attori", function (req, res) {
  // lettura dati da file json
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  // map campi utili
  const arr_attori = attori.map((att) => {
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;
    return { id, nome, cognome };
  });
  //console.log(attori);
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  // lettura id
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }

  // lettura file
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });
  // controllo
  if (typeof attr === "undefined") {
    res.status(400).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

app.post("/attore", function (req, res) {
  //controlli
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }
  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  // lettura da file
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  //creazione nuovo indice
  const index = Number(nuovo_attore.id) - 1;
  console.log("Nuovo indice: " + index);
  attori[index] = nuovo_attore;
  console.log(attori);
  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).send("Attore creato");
});

app.put("/attore", function (req, res) {
  //controlli
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }
  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };
  // lettura file
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // trovare e cancellare l'elemento
  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

app.delete("/attore", function (req, res) {
  // controlli
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  //lettura file
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // verifico che l'elemento esista
  const attr = attori.filter((attore) => {
    return attore.id == id_da_cancellare;
  });
  // se l'elemento esiste lo cancello
  if (attr.length > 0) {
    const array_deleted = attori.filter((attore) => {
      return attore.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
    res.status(200).send("Attore cancellato");
  } else {
    res.status(200).send("Attore da cancellare non trovato");
  }
});
