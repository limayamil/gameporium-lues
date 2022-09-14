import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-gameporium.png";

function NavBar() {
  return (
    <nav className="row">
      <div className="col-md-2" id="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo Gameporium" />
        </Link>
      </div>
      <div className="col-md-8" id="navbar-menu">
        <ul className="menu">
          <li>
            <Link to="/category/placas-de-video">Placas de video</Link>
          </li>
          <li>
            <Link to="/category/mandos">Mandos</Link>
          </li>
          <li>
            <Link to="/category/monitor">Monitores</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-1" id="navbar-login">
        <ul className="menu">
          <li className="cta-destacado">
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
