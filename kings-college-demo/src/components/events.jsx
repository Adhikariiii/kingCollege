import styles from "./event.module.css";
import style from "./homepage.module.css";
import students from "../assets/singing.jpg";
import Navbar from "./navbar";
// import banner from "../assets/calender/download.jpeg";
import CalendarComponent from "./Calender";
import Footer from "./footer";

export default function Events({ detail }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className={styles.eventsContainer}>
      <Navbar />

      <div
        className={`${style.slantedImagesAndVideoContainer} ${styles.eventContainer}`}
      >
        <div
          className={style.slantedVideo}
          style={{
            background: `url(${students}) center/cover no-repeat`,
          }}
        >
          <div className={style.slantedVideotexts}>
            <div className={style.content}>
              <h1 className={styles.contentHeading}>Events at King's</h1>

              <p className={styles.contentHeading}>
                At King's, we believe that learning should extend outside the
                classroom. With a myriad of events led by our 7 internal clubs,
                and various other initiatives, you are sure to find lots of
                events that excites you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calenderEvents}>
        <div className={styles.textContainer}>
          {detail.map((program, index) => {
            return (
              <div key={index}>
                <h2>{program.eventName}</h2>
                <p>{program.date}</p>
                <p style={{ fontSize: "1.5rem", padding: "1rem" }}>
                  {program.time}
                </p>
                <p>{program.description}</p>
                <img src={program.image} alt="banner" />
                <hr className={styles.horizontal} />
                <a className={styles.anchorTag} href="#">
                  Explore More...
                </a>
                <hr className={styles.horizontal} />
              </div>
            );
          })}
        </div>
        <div className={styles.claenderContainer}>
          <div className="show">
            <button>Events</button>
            <CalendarComponent />
          </div>
          <p style={{ marginTop: "2rem" }}>Select By Month</p>
          <div className={styles.month}>
            {months.map((each) => {
              return (
                <button key={each} className={styles.monthButton}>
                  {each}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
