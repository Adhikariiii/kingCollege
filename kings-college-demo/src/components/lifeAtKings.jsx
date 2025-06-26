import style from "./homepage.module.css";

import Navbar from "./navbar";
import styles from "./lifeAtKings.module.css";
import studentsExperimenting from "../assets/homepage/admission/studentsExperiment.jpg";
import person1 from "../assets/lifeatking/person1.webp";
import computerLab from "../assets/lifeatking/computerLab.jpg";
import Footer from "./footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div
        className={`${style.slantedImagesAndVideoContainer} ${styles.lifeAtKingsContainer}`}
      >
        <div
          className={style.slantedVideo}
          style={{
            background: `url(${studentsExperimenting}) center/cover no-repeat`,
          }}
        >
          <div className={style.slantedVideotexts}>
            <div className={style.content}>
              <h1>EXPERIENCE </h1>
              <h1>PRACTICE</h1>
              <h1>LEARN</h1>

              <p>
                King's is where learning extends beyond the classrooms. Design
                and present projects, apply classroom knowledge, and benefit
                from our industry partnerships for real-world opportunities.
                Engage yourself in our community through tailored programs,
                energized clubs and exciting events. Immerse yourself in our
                community through curated programs, clubs, and exciting events.
                Experience a holistic environment that propels you towards your
                highest potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.briefIntro}>
        <img src={person1} alt="picture" />
        <div className={styles.contentContainer}>
          <p className={styles.quoteMark}>“</p>
          <p>
            King's College's MBA in Tech and Innovation was a game-changer.
            Delving into the world of data, I honed skills in analysis and trend
            visualization, realizing its pivotal role in shaping successful
            businesses today. Beyond the core subjects, diverse modules expanded
            my knowledge across law, finance, marketing, and entrepreneurship,
            providing a holistic business perspective essential for navigating
            the modern landscape.
          </p>{" "}
          <br />
          <p>
            {" "}
            Now, let's talk about the socialization trip—it was a blast! Picture
            this: laughter, impromptu late-night jam with friends, kayaking, and
            an unforgettable plunge into the Begnas lake at Pokhara. Those
            moments were pure bliss. My MBA journey? More than hitting the
            books; it was this awesome adventure that shaped my brain and
            sparked a love for constant learning.
            <span> Sushant Suwal</span>{" "}
          </p>
        </div>
      </div>

      {/* Initiatives */}

      <div className={style.textContainer}>
        <div className={style.slantedImagesAndVideoContainer}>
          <div
            className={style.slantedVideo}
            style={{
              background: `url(${computerLab}) center/cover no-repeat`,
            }}
          >
            <div className={`${style.slantedVideotexts}`}>
              <div className={`${style.content},  ${style.divider}`}>
                <div className={styles.description}>
                  <h1>OUR INITIATIVES</h1>

                  <div className={style.paragraphContainer}>
                    <p>
                      At King's, we take initiatives to bring the best learning
                      environment for students, to derive the best outcomes for
                      their education, career and vision.
                    </p>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button>STUDENT'S PROJECT</button>
                  <button>EXTRA CURRICULARS</button>
                  <button>MENTAL WELLBEING</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
