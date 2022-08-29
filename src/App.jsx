import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="usuario"/>
    </div>
  );
}

export default App;