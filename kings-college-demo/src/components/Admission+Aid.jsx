import style from "../components/homepage.module.css";
import styles from "../components/admission.module.css";
import Navbar from "./navbar";
import jumpingg from "../assets/homepage/sjumping.webp";

//data
import admission from "../admission.js";
//footer
import Footer from "./footer.jsx";

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

              {/* Admission team */}

              <div className={styles.admissionContainer}>
                <div className={styles.admissonHeading}>
                  <h1>Meet Our Admission Team</h1>
                </div>
                {admission.map((person) => {
                  return (
                    <div key={person.id} className={styles.admissionTeam}>
                      <div className={styles.imageContainer}>
                        <img src={person.image} alt="image" />
                      </div>
                      <span>
                        <h3>{person.personName}</h3>
                        <p>{person.description}</p>
                      </span>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="bookConsultant">
                {" "}
                <div className={style.slantedImagesAndVideoContainer}>
                  <div
                    className={`${style.slantedVideo} ${style.aboutUsClipping}`}
                    style={{
                      background: `url(${jumpingg}) center/cover no-repeat`,
                    }}
                  >
                    <div className={style.slantedVideotexts}>
                      <div
                        className={`${style.content} ${style.aboutUsContent}`}
                      >
                        <h1 className={styles.information}>
                          {" "}
                          FIND THE BEST COURSE FOR YOU
                        </h1>
                        <div className={styles.aboutkingsTextContainer}>
                          <p>
                            Discover your passion with a range of undergraduate
                            and graduate programs in business, IT, and more, you
                            can find the program that aligns with your interests
                            and career goals and take the first step towards a
                            successful future.
                          </p>
                          <div className={styles.aboutButtonContainer}>
                            <button className={style.aboutButtons}>
                              BOOK A CONSULTANT
                            </button>
                            <button className={style.aboutButtons}>
                              APPLY NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.textContainer}>
                    <h3>STEPS OF ADMISSION</h3>
                    <p>Here’s what you can expect in the admissions process:</p>

                    <div className={styles.admissionStep}>
                      <h4>
                        Step 1: Submitting the application form and relevant
                        documents
                      </h4>
                      <p>
                        The documents required are mentioned in the application
                        form. You can fill out an application form
                        <span>
                          {" "}
                          <a href="#">here</a>.
                        </span>
                      </p>
                    </div>

                    <div className={styles.admissionStep}>
                      <h4>Step 2: Statement of Purpose</h4>
                      <p>
                        This will be a 300-word essay about your background and
                        the reason behind choosing King's College and the
                        Westcliff University affiliated MBA program. You need to
                        submit a digital copy of the SOP before the personal
                        interview.
                      </p>
                    </div>

                    <div className={styles.admissionStep}>
                      <h4>Step 3: Entrance Examination & Personal Interview</h4>
                      <p>
                        We will schedule an entrance & interview for you and get
                        back to you with the date and time. After these, you
                        will be informed about your selection and any further
                        requirements. Selections will be based on four criteria:
                        Entrance examination, personal interview, past academic
                        record, and extra-curricular activities.
                      </p>
                      <hr />
                      <p>
                        Don't miss your chance to unlock your potential - apply
                        now to King's College Nepal and discover endless
                        opportunities for growth and success in your chosen
                        field!
                      </p>
                      <h1>
                        Admission DeadLine : <span>July 29, 2025</span>
                      </h1>
                      <button>Apply Now</button>
                    </div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
