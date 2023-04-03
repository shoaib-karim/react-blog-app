import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="grad-bar"></div>
      <nav className="navbar">
        <Link to="/">
          <img src="./logo192.png" alt="Company Logo" />
        </Link>

        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav no-search">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/create">Add Blog</Link>
          </li>

          <li className="nav-item">
            <Link to="/">Contact Us</Link>
          </li>
          <i className="fas fa-search" id="search-icon"></i>
          <input className="search-input" type="text" placeholder="Search.." />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
