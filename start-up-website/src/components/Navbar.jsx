import { NavLink } from "react-bootstrap";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar container-fluid d-flex  justify-content-between align-items-center position-relative">
        <ul className="navlinks d-flex justify-content-center align-items-center gap-3 p-0 text-white m-0">
          <NavLink className="nav-item">Home</NavLink>
          <NavLink className="nav-item">About Us</NavLink>
          <NavLink className="nav-item">Location</NavLink>
        </ul>
        <div className="sign-in-btn">
          <a href="#" className="btn btn-outline-light">
            sign in
          </a>
        </div>
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
