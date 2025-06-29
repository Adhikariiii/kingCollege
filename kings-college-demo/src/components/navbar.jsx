import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Modal from "react-modal";

import collegeLogo from "../assets/collegeLogo.webp";

import style from "./navbar.module.css";
import { RxCross1 } from "react-icons/rx";

//module
import Alumni from "./Alumni";
import Academics from "./academics";
import ReactModal from "react-modal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              Academics
            </a>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        contentLabel="Alumni Modal"
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <div className={style.modalHeading}>
          <h2>Academics</h2>
          <RxCross1
            onClick={() => {
              setIsModalOpen(false);
            }}
            style={{ height: "45px", width: "45px", cursor: "pointer" }}
          />
        </div>
        <hr />

        <Academics />
      </Modal>
    </div>
  );
}
