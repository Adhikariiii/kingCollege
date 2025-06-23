import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import collegeLogo from "../assets/collegeLogo.webp";
import searchIcon from "../assets/searchIcon.png";
import style from "./navbar.module.css";

//module
import Alumni from "./Alumni";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${style.container} ${scrolled ? style.scrolled : ""}`}>
      <Link to={"/"}>
        <img src={collegeLogo} alt="logo" />
      </Link>
      <nav>
        <ol>
          <li>
            <a href="#">Academics</a>
          </li>
          <li>
            <Link to={"/Admission"}>Admission + Aid</Link>
          </li>
          <li>
            <a href="#">Life at King's</a>
          </li>
          <li>
            <Link to={"/Alumni"}>Alumni</Link>
          </li>
          <li>
            <a href="#">Student Projects</a>
          </li>
          <li>
            <a href="#">About King's</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Publications</a>
          </li>
          {/* <img
            src={searchIcon}
            alt="search-icon"
            className={style.searchIcon}
          /> */}
        </ol>
      </nav>
    </div>
  );
}
