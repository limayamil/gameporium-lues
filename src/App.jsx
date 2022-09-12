import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="usuario" />
      <ItemDetailContainer />
      {/* <ItemCount initialStock={5} initialQuantity={1} setItemAdd={0} /> */}
    </div>
  );
}

export default App;
