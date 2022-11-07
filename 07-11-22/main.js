fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.map((dati) => {
      console.log(dati.name);
      console.log(Object.values(dati.address));
      console.log(dati.address.city);
      console.log("-------------------------------------");
    })
  )
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("done"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.map((element) => {
      console.log(element.id);
      console.log(element.title);
      console.log("-------------------------------------");
    })
  )
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("done"));
