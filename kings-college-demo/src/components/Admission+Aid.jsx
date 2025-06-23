import style from "../components/homepage.module.css";
import styles from "../components/admission.module.css";
import Navbar from "./navbar";
import researching from "../assets/homepage/researching.jpg";
import jumpingg from "../assets/homepage/sjumping.webp";

export default function Admission() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className={`${style.admissionContainer} `}>
        <main>
          {" "}
          <div
            className={`${style.textContainer} ${styles.admissionContainer}`}
          >
            <div className={style.slantedImagesAndVideoContainer}>
              <div
                className={style.slantedVideo}
                style={{
                  background: `url(${jumpingg}) center/cover no-repeat`,
                }}
              >
                <div className={`${style.slantedVideotexts}`}>
                  <div className={`${style.content},  ${style.divider}`}>
                    <div className={style.description}>
                      <h1>Admission + Aid</h1>
                      <div className={style.paragraphContainer}>
                        <p>
                          At King's College, we take great pride in our
                          commitment to supporting student success through a
                          range of scholarships across our academic programs.
                        </p>
                        <p>
                          We recognize that financial assistance can play a
                          crucial role in enabling deserving students to pursue
                          their educational goals and realize their full
                          potential. <br />
                          Find more about scholarship here
                        </p>
                      </div>

                      <div className={style.slantedvideolastContainer}>
                        <button>APPLY NOW </button>
                      </div>
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
                      <img src={""} alt="uniImage" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
