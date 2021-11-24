import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

function App() {

  let text = "Este es el texto para mi componente ItemListContainer pasado como props. Greetings!";

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greetings={text} />
    </div>
  );
}

export default App;
