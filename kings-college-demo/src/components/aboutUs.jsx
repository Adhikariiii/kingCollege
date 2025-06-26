import style from "./homepage.module.css";
import researching from "../assets/lifeatking/computerLab.jpg";
export default function AboutUs() {
  return (
    <>
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
                      Discover your passion with a range of undergraduate and
                      graduate programs in business, IT, and more.
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
        </div>
      </div>
    </>
  );
}
