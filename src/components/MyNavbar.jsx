import { Link } from "react-router-dom";
import logo from "../assets/img/img/logo.png";
function MyNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ width: "100px", height: "55px" }} />
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/tv-shows">
              TV Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
