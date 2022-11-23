//"use strict";
var mia_calc = require("./mia_calc.js");
const http = require("http");
const url = require("url");
const pagina_home = "Benvenuto nella mia home";
const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  const my_url = url.parse(req.url, true).pathname;
  //const { param1, param2 } = params;
  //console.log(param1, param2);
  switch (my_url) {
    case "/home":
      res.write(pagina_home);
      break;
    case "/calcolatrice":
      res.write("Benvenuto nella pagina della mia calcolatrice");
    case "/sum":
      const primo_addendo = params.add_1;
      const secondo_addendo = params.add_2;
      res.write(" Il parametro è " + primo_addendo);
      res.write(" Il secondo è " + secondo_addendo);
      const result = mia_calc.sum(primo_addendo, secondo_addendo);
      res.write(" Il risultato è " + result);
      break;
    case "/sub":
      const minuendo = params.add_1;
      const sottraendo = params.add_2;
      // TODO verificare che esistano dei valori numerici
      res.write(" Il parametro è " + minuendo);
      res.write(" Il secondo è " + sottraendo);
      const result1 = mia_calc.sub(minuendo, sottraendo);
      res.write(" Il risultato è " + result1);
    case "/mult":
      const primo_molt = params.add_1;
      const sec_molt = params.add_2;
      // TODO verificare che esistano dei valori numerici
      res.write(" Il parametro è " + primo_molt);
      res.write(" Il secondo è " + sec_molt);
      const result2 = mia_calc.mult(primo_molt, sec_molt);
      res.write(" Il risultato è " + result2);
    case "/div":
      const divisore = params.add_1;
      const dividendo = params.add_2;
      res.write(" Il parametro è " + divisore);
      res.write(" Il secondo è " + dividendo);
      const result3 = mia_calc.div(divisore, dividendo);
      res.write(" Il risultato è " + result3);
    default:
      res.write(
        my_url +
          "<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>"
      );
  }
  res.end();
});
server.listen(3000);
console.log("Salve mondo");
