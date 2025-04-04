import "./NavBar.css";
import Connect from "./Connect";
import imgurl from "/src/assets/baselogo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={imgurl} alt="Logo" className="nav-logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Portfolio Tracker</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="connect-wallet">
        <Connect />
      </div>
    </nav>
  );
}

export default NavBar;
