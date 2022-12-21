import "./App.css";
import { Button } from "./components/button/Button";
import { Text } from "./components/text/Text";

function App() {
  const customColor = "orange";

  console.clear();

  return (
    <div className="App">
      <Text style={{ color: customColor }} as="h1" variant="title">
        Hello world!
      </Text>

      <Button
        aria-label="surprise"
        variant="surprise"
        className="surprise"
        onClick={() => console.log("Today you are so cute!")}
      >
        Press for a surprise
      </Button>
      <Button
        aria-label="boring"
        variant="boring"
        className="boring"
        onClick={() => console.log("I'm so bored!")}
      >
        Not so funny
      </Button>
      <Button
        aria-label="hello"
        variant="hello"
        className="hello"
        onClick={() => console.log("Hi!!!")}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
