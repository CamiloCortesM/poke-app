import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid expand">
        <img src={logo} alt="pokebola" className="navbar" />
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link fires" : "nav-link"
                }
                aria-current="page"
                to="/fire"
              >
                FIRE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link electrics" : "nav-link"
                }
                aria-current="page"
                to="/electric"
              >
                ELECTRIC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link grounds" : "nav-link"
                }
                aria-current="page"
                to="/ground"
              >
                GROUND
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link normals" : "nav-link"
                }
                aria-current="page"
                to="/normal"
              >
                NORMAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link waters" : "nav-link"
                }
                aria-current="page"
                to="/water"
              >
                WATER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/search">
                SEARCH
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
