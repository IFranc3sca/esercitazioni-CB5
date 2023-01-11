import "./App.css";
import { BloodTypes } from "./fetch/components/blood-types/BloodTypes";
import { Beers } from "./fetch/components/beers/Beers";
import { Users } from "./fetch/components/users/Users";
import { Banks } from "./fetch/components/banks/Banks";

function App() {
  return (
    <div className="App">
      <BloodTypes />
      <hr />
      <Beers />
      <hr />
      <Users />
      <hr />
      <Banks />
      <hr />
    </div>
  );
}

export default App;
