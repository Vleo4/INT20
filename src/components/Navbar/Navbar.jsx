import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/Search.png";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ArrowUp from "../../assets/ArrowUp.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="Logo" />
        <h2>CrewUp</h2>
      </div>
      <div className="app__navbar-links">
        <div class="app__navbar-links_dropdown">
          <button class="app__navbar-links_dropdown-dropbtn">
            Проєкти <img src={ArrowUp} alt="ArrowUp" />
          </button>
          <div class="app__navbar-links_dropdown-content">
            <Link className="app__navbar-links_link" to="/projects">
              Усі проєкти
            </Link>
            <Link className="app__navbar-links_link" to="/my-projects">
              Мої проєкти
            </Link>
            <Link className="app__navbar-links_link" to="/my-projects">
              Беру участь
            </Link>
          </div>
        </div>
        <Link to="/requests" className="app__navbar-links_link">
          Заявки
        </Link>
        <div class="app__navbar-links_dropdown">
          <button class="app__navbar-links_dropdown-dropbtn">
            Резюме <img src={ArrowUp} alt="ArrowUp" />
          </button>
          <div class="app__navbar-links_dropdown-content">
            <Link className="app__navbar-links_link" to="/my-cv">
              Моє резюме
            </Link>
            <Link className="app__navbar-links_link" to="/cvs">
              Усі резюме
            </Link>
          </div>
        </div>
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
              <Link
                to="/projects"
                className="app__navbar-smallscreen_links-link"
              >
                Усі проєкти
              </Link>
              <Link
                to="/my-projects"
                className="app__navbar-smallscreen_links-link"
              >
                Мої проєкти
              </Link>
              <Link
                to="/my-projects"
                className="app__navbar-smallscreen_links-link"
              >
                Беру участь
              </Link>
              <Link
                to="/profile"
                className="app__navbar-smallscreen_links-link"
              >
                Заявки
              </Link>
              <Link to="/my-cv" className="app__navbar-smallscreen_links-link">
                Моє резюме
              </Link>
              <Link to="/cvs" className="app__navbar-smallscreen_links-link">
                Усі резюме
              </Link>
              <Link
                to="/profile"
                className="app__navbar-smallscreen_links-link"
              >
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
