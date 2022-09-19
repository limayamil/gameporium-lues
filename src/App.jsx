import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

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
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
