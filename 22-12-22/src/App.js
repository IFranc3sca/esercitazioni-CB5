import "./App.css";
import { Button } from "./atoms/button/Button";
import { Text } from "./atoms/text/Text";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "./layout/container/Container";

function App() {
  const customColor = "orange";

  console.clear();

  return (
    <div className="App">
      <Header />
      <main>
        <Container>CIAO!!</Container>
        {/* div.container > contenuto */}

        <Container withRow={0}>
          <Text style={{ color: customColor }} as="h1" variant="title">
            Hello world!
          </Text>
        </Container>
        {/* .container > .row > contenuto */}

        {/* {Button(propsButton1)} */}
        {/* <Button label={propsButton2.label} 
                title={propsButton2.title} /> */}
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
