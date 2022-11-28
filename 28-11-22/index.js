const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello"));
app.get("/calcolatrice", (req, res) => {
  res.sendFile(__dirname + "/calcolatrice.html");
});
app.post("/calcolatrice", (req, res) => {
  let a = parseInt(req.body.param1);
  let b = parseInt(req.body.param2);
  let result;
  switch (par3) {
    case "sum":
      result = a + b;
      res.status(200).json({ result: result });
      break;
    case "sub":
      result = a - b;
      res.status(200).json({ result: result });
      break;
    case "mult":
      result = a * b;
      res.status(200).json({ result: result });
      break;
    case "div":
      result = a / b;
      res.status(200).json({ result: result });
      break;
    default:
      console.log("errore");
  }
});
app.listen(port, () => console.log("app listening"));
