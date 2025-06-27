// css
import styles from "../components/publications.module.css";

//components
import Navbar from "./navbar";
import Footer from "./footer";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

//react
import React from "react";
import { useState } from "react";
export default function Publications() {
  const [click, setClick] = useState({
    report: false,
    research: false,
  });

  const handleClick = (section) => {
    setClick((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className={styles.publications}>
        <header>
          <Navbar />
        </header>
        <main>
          <h1>Publications</h1>
          <div className={styles.mainContainer}>
            <h2>Report</h2>

            {click.report ? (
              <FaArrowUp onClick={() => handleClick("report")} />
            ) : (
              <FaArrowDown onClick={() => handleClick("report")} />
            )}
          </div>
          {click.report && (
            <>
              <hr />
              <div className={styles.reportContainer}>
                <div className={styles.reportList}>
                  <p>Annual Report 2023-2024</p>
                  <p>Industry Meet Report</p>
                  <p>Student Satisfaction Survey</p>
                  <p>Tracer Report</p>
                </div>
                <div className={styles.download}>
                  <a href="#">Download...</a>
                  <a href="#">Download...</a>
                  <a href="#">Download...</a>
                  <a href="#">Download...</a>
                </div>
              </div>
              <hr />
            </>
          )}
          <div className={styles.mainContainer}>
            <h2>Research</h2>
            <button onClick={() => handleClick("research")}>
              {click.research ? "Hide" : "Show"}
            </button>
          </div>
          {click.research && (
            <>
              <hr />
              <div className={styles.reportContainer}>
                <div className={styles.reportList}>
                  <p>Social Enterprise Report</p>
                  <p>
                    Business Guidance Document for Startups in wake of COVID-19
                  </p>
                  <p>Entrepreneurs' Responses to COVID-19 Crisis in Nepal</p>
                </div>
                <div className={styles.download}>
                  <a href="#">Download...</a>
                  <a href="#">Download...</a>
                  <a href="#">Download...</a>
                </div>
              </div>
              <hr />
            </>
          )}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
