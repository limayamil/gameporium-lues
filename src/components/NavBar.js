import "../App.css";
import logo from "../img/logo-gameporium.png";

function NavBar() {
  return (
    <nav className="container">
      <div className="row">
        <div className="col-md-2" id="navbar-logo">
          <img src={logo} alt="Logo Gameporium" />
        </div>
        <div className="col-md-8" id="navbar-menu">
          <ul className="menu">
            <li>
              <a href="index.html">Consolas</a>
            </li>
            <li>
              <a href="index.html">Mandos</a>
            </li>
            <li>
              <a href="index.html">Juegos físicos</a>
            </li>
            <li>
              <a href="index.html">Juegos Digitales</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2" id="navbar-login">
          <ul className="menu">
            <li className="cta-destacado">
              <a href="index.html">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;