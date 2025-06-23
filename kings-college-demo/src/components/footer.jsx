import style from "./footer.module.css";
import footerLogo from "../assets/homepage/footerLogo.webp";
import insta from "../assets/homepage/instagram.webp";
import facebook from "../assets/homepage/facebook.webp";
import youtube from "../assets/homepage/youtube.webp";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLogo}>
        <img src={footerLogo} alt="footerLogo" />
        <p>Transforming society through entrepreneurship</p>
      </div>
      <div className={style.information}>
        <div className={style.infoContainer}>
          <a href="">About us</a> <br />
          <a href="">Approvals</a>
          <br />
          <a href="">Our Team</a>
          <br />
          <a href="">Centers and Departments</a>
          <br />
          <a href="">News and Events</a>
          <br />
          <a href="">Blogs</a>
          <br />
          <a href="">Schoolarship Awarded</a>
          <br />
          <a href="">Contact Us</a>
          <br />
          <a href="">FAQ</a>
          <br />
          <a href="">Privacy and Policy</a>
          <br />
          <a href="">Sitemap</a>
          <br />
          <div className={style.copyright}>
            Copyright © 2023-2025 - King's College
          </div>
        </div>
      </div>
      <div className={style.findUs}>
        <h4>
          Find us on: <br />
          <a href="">
            <img src={insta} alt="insta" />
          </a>
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" />
          </a>
        </h4>
        <div className="location">
          <p>
            Babarmahal, Kathmandu <br />
            01 - 5325909, 01 - 5324520, 01 - 5324574 <br />
            General inquiry: <br />
            info@kingscollege.edu.np <br />
            Admissions inquiry: <br />
            admissions@kingscollege.edu.np <br />
          </p>
        </div>
      </div>
    </div>
  );
}
