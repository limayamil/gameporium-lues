import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="usuario" />} />
        <Route
          path="/category/:category"
          element={<ItemListContainer greeting="usuario" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
