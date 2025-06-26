import styles from "./event.module.css";
import style from "./homepage.module.css";
import students from "../assets/singing.jpg";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Events() {
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
              <h1>Events at King's</h1>

              <p>
                At King's, we believe that learning should extend outside the
                classroom. With a myriad of events led by our 7 internal clubs,
                and various other initiatives, you are sure to find lots of
                events that excites you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
