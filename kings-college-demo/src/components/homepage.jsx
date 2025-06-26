import students from "../assets/homepage/studentss.jpg";
import aboutus from "../assets/homepage/aboutus.jpg";
import experience from "../assets/homepage/experience.jpg";
import researching from "../assets/homepage/researching.jpg";
import uniImage from "../assets/homepage/logo.png";
import style from "./homepage.module.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import AboutUs from "./aboutUs";
export default function HomePage() {
  const onClick = () => {};

  return (
    <>
      <main>
        <div className={style.mainContainer}>
          <div className={style.slantedImagesAndVideoContainer}>
            <div
              className={style.slantedVideo}
              style={{
                background: `url(${students}) center/cover no-repeat`,
              }}
            >
              <div className={style.slantedVideotexts}>
                <div className={style.content}>
                  <h1>KING'S </h1>
                  <h1>COLLEGE</h1>
                  <span> architeching future</span>

                  <p>
                    We nurture entrepreneurial mindset by engaging you in real
                    experiences in our communities - the approach known as
                    Community as Curriculum. For us, real learning happens when
                    there is a meaningful collaboration between education
                    institutions and communities.
                  </p>
                </div>
                <div className={style.slantedvideolastContainer}>
                  <button onClick={onClick}>Apply Now </button>
                  <p>DeadLine:June9, 2025</p>
                </div>
              </div>
            </div>
          </div>
          {/* kingscollege */}

          <div className={style.textContainer}>
            <div className={style.slantedImagesAndVideoContainer}>
              <div
                className={style.slantedVideo}
                style={{
                  background: `url(${researching}) center/cover no-repeat`,
                }}
              >
                <div className={`${style.slantedVideotexts}`}>
                  <div className={`${style.content},  ${style.divider}`}>
                    <div className={style.description}>
                      <h1>CHOOSE YOUR PROGRAM </h1>
                      <div className={style.paragraphContainer}>
                        <p>
                          Discover your passion with a range of undergraduate
                          and graduate programs in business, IT, and more.
                        </p>
                        <p>
                          Find the program that aligns with your interests and
                          career goals. Take the first step towards a successful
                          future.
                        </p>
                      </div>

                      <div className={style.slantedvideolastContainer}>
                        <button>BOOK CONSULTANT </button>
                      </div>
                    </div>
                    <div className={style.coursesName}>
                      <h3>MBA</h3>
                      <a href="#">View Porgrams...</a>

                      <h3>BBA</h3>
                      <a href="#">View Porgrams...</a>

                      <h3>BSIT</h3>
                      <a href="#">View Porgrams...</a>

                      <h3>BSCS</h3>
                      <a href="#">View Porgrams...</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Choose program */}
              <div className={style.affilitations}>
                <div className={style.affilitationsHeading}>
                  <h1>AFFILIATIONS AND ACCREDITATIONS</h1>
                </div>
                <div className={style.affilitationContent}>
                  <div className={style.affilitaionTextContent}>
                    <p>
                      King’s College is an affiliate of Westcliff University.
                    </p>
                    <p>
                      All Westcliff University programs offered through King’s
                      College are approved by the Ministry of Education,
                      Government of Nepal. Westcliff University is
                      institutionally accredited by the WASC Senior College and
                      University Commission (WSCUC), 1080 Marina Village
                      Parkway, Suite 500, Alameda, CA 94501, 510.748.9797.
                      Business programs offered by Westcliff University through
                      its affiliate, King’s College are accredited by the
                      Accreditation Council for Business Schools and Programs
                      (ACBSP).
                    </p>
                    <h3>Recognition</h3>
                    <p>
                      Westcliff University ranked 800-1000 in The Times Higher
                      Education World University Rankings 2024 which includes
                      1,906 universities across 108 countries and regions(View
                      details).
                    </p>
                  </div>
                  <div className={style.uniImage}>
                    <a href="https://www.westcliff.edu/">
                      <img src={uniImage} alt="uniImage" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.aboutCollegeContainer}>
            {" "}
            <div className={style.slantedImagesAndVideoContainer}>
              <div
                className={`${style.slantedVideo} ${style.aboutUsClipping}`}
                style={{
                  background: `url(${aboutus}) center/cover no-repeat`,
                }}
              >
                <div className={style.slantedVideotexts}>
                  <div className={`${style.content} ${style.aboutUsContent}`}>
                    <h1 className={style.aboutKingHeading}> ABOUT KING'S </h1>
                    <div className={style.aboutkingsTextContainer}>
                      <p>
                        Our initiatives and projects study, practice and
                        innovate in the fields of education, entrepreneurship,
                        community-based learning and many more. <br />
                        King's initiatives and projects aim to promote
                        education, entrepreneurship, community-based learning,
                        and innovation in Nepal. By doing so, it seeks to
                        contribute to the social and economic development of the
                        country and create a better future for all Nepalis.
                      </p>
                      <div className={style.aboutButtonContainer}>
                        <button className={style.aboutButtons}>ABOUT US</button>
                        <button className={style.aboutButtons}>OUR TEAM</button>
                        <button className={style.aboutButtons}>
                          KING'S BLOG
                        </button>
                        <button className={style.aboutButtons}>
                          NEWS AND ANNOUNCEMENTS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about college   */}
          <div className={style.textContainer}>
            <div className={style.slantedImagesAndVideoContainer}>
              <div
                className={style.slantedVideo}
                style={{
                  background: `url(${experience}) center/cover no-repeat`,
                }}
              >
                <div className={`${style.slantedVideotexts}`}>
                  <div className={`${style.content},  ${style.divider}`}>
                    <div className={style.description}>
                      <h1>CHOOSE YOUR PROGRAM </h1>
                      <div className={style.paragraphContainer}>
                        <p>
                          Discover your passion with a range of undergraduate
                          and graduate programs in business, IT, and more.
                        </p>
                        <p>
                          Find the program that aligns with your interests and
                          career goals. Take the first step towards a successful
                          future.
                        </p>
                      </div>

                      <div className={style.slantedvideolastContainer}>
                        <button>LIFE AT KING'S </button>
                      </div>
                    </div>
                    <div className={style.coursesName}>
                      <h3>EVENTS</h3>
                      <a href="#" className={style.experienceLink}>
                        View Events calender
                      </a>

                      <h3>PROJECTS</h3>
                      <a href="#" className={style.experienceLink}>
                        View Students Projects
                      </a>

                      <h3>AlUMNI</h3>
                      <Link to="/Alumni" className={style.experienceLink}>
                        View our Alunmni
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Choose program */}
              <div className={style.experienceParagraph}>
                <p>
                  Don't miss your chance to unlock your potential - apply now to
                  King's College Nepal and discover <br /> endless opportunities
                  for growth and success in your chosen field!
                </p>
                <h3>
                  ADMISSION DEADLINE: <span>JULY 29, 2025</span>
                </h3>
                <div className={style.experienceParagraphButton}>
                  <button>APPLY NOW</button>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
