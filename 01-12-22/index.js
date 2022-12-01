const express = require("express");
const fs = require("fs");
const app = express();

// importante per post
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000!");
});

app.get("/registi", function (req, res) {
  // lettura dati da file json
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  // map campi utili
  const arr_registi = registi.map((reg) => {
    const id = reg.id;
    const nome = reg.nome;
    const cognome = reg.cognome;
    return { id, nome, cognome };
  });
  res.json(arr_registi);
});

app.get("/regista", function (req, res) {
  // lettura id
  const id_regista = parseInt(req.query.id);
  if (isNaN(id_regista)) {
    res.status(400).send("Parametro mancante!");
  }

  // lettura file
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  const regi = registi.find((registi) => {
    return regista.id == id_regista;
  });
  // controllo
  if (typeof regi === "undefined") {
    res.status(400).send("Regista non trovato!");
  } else {
    res.json(regi);
  }
});

app.post("/regista", function (req, res) {
  //controlli
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }
  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  //creazione nuovo indice
  const index = Number(nuovo_regista.id) - 1;
  console.log("Nuovo indice: " + index);
  registi[index] = nuovo_regista;
  console.log(registi);
  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).send("Regista creato");
});

app.put("/regista", function (req, res) {
  //controlli
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }
  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // trovare e cancellare l'elemento
  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovo_regista);
    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).send("Regista aggiornato");
  } else {
    res.status(200).send("Regista non trovato");
  }
});

app.delete("/regista", function (req, res) {
  // controlli
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  //lettura file
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // verifico che l'elemento esista
  const regi = registi.filter((regista) => {
    return regista.id == id_da_cancellare;
  });
  // se l'elemento esiste lo cancello
  if (regi.length > 0) {
    const array_deleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
    res.status(200).send("Regista cancellato");
  } else {
    res.status(200).send("Regista da cancellare non trovato");
  }
});
