import { NavLink } from "react-bootstrap";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg container-fluid d-flex  justify-content-between align-items-center position-relative">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navlinks navbar-nav d-flex justify-content-center align-items-center gap-3 p-0 text-white m-0"
            id="navbarSupportedContent"
          >
            <NavLink className="nav-item">
              <a className="nav-link active" href="">Home</a>
            </NavLink>
            <NavLink className="nav-item">
              <a className="nav-link">About Us</a>
            </NavLink>
            <NavLink className="nav-item">
              <a className="nav-link">Location</a>
            </NavLink>
          </ul>
        </div>
        <div className="sign-in-btn">
          <a href="#" className="btn btn-outline-light">
            sign in
          </a>
        </div>
      </nav>
      <div className="logo-div">
        <img
          className="logo rounded-circle position-absolute"
          src="src/assets/logo.jpg"
          alt="Start-up logo"
        />
      </div>
    </>
  );
};

export default Navbar;
