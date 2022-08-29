import shoppingCart from "../../assets/shopping-cart-64px.png";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="col-md-1" id="navbar-cart">
        <img src={shoppingCart} alt="Cart" />
    </div>
  );
}

export default CartWidget;