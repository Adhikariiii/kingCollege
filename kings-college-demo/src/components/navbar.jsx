import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import collegeLogo from "../assets/collegeLogo.webp";

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
            <Link to={"/lifeAtKings"}>Life at King's</Link>
          </li>
          <li>
            <Link to={"/Alumni"}>Alumni</Link>
          </li>
          <li>
            <Link to={"/studentProjects"}>Student Projects</Link>
          </li>
          <li>
            <Link to={"/AboutKings"}>About King's</Link>
          </li>
          <li>
            <Link to={"/Events"}>Events</Link>
          </li>
          <li>
            <Link to={"/Publications"}>Publications</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
