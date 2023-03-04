import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/Search.png";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="Logo" />
        <h2>CrewUp</h2>
      </div>
      <div className="app__navbar-links">
        <Link to="/projects" className="app__navbar-links_link">
          Проєкти
        </Link>
        <Link to="/my-projects" className="app__navbar-links_link">
          Мої проєкти
        </Link>
        <Link to="/create-project" className="app__navbar-links_link">
          Створити проєкт
        </Link>
        <Link to="/cv" className="app__navbar-links_link">
          Резюме
        </Link>
        <Link to="/profile" className="app__navbar-links_link">
          Профіль
        </Link>
      </div>
      <div className="app__navbar-searchbar">
        <form>
          <input type="text" placeholder="Пошук" />
          <img src={Search} alt="Search" />
        </form>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu3Line
          style={{ cursor: "pointer" }}
          color="rgba(0, 0, 0, 0.5)"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine
            color="rgba(0, 0, 0, 0.5)"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-smallscreen_links">
              <Link to="/projects" className="app__navbar-smallscreen_links-link">
                Проєкти
              </Link>
              <Link to="/my-projects" className="app__navbar-smallscreen_links-link">
                Мої проєкти
              </Link>
              <Link to="/create-project" className="app__navbar-smallscreen_links-link">
                Створити проєкт
              </Link>
              <Link to="/cv" className="app__navbar-smallscreen_links-link">
                Резюме
              </Link>
              <Link to="/profile" className="app__navbar-smallscreen_links-link">
                Профіль
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
