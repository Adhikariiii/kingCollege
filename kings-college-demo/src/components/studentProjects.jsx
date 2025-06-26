import Navbar from "./navbar";
import style from "../components/homepage.module.css";
import styles from "../components/studentProjects.module.css";
import image from "../assets/studentProject/image3.jpg";
import project1 from "../assets/studentProject/1.webp";
import project2 from "../assets/studentProject/2.webp";

export default function StudentProjects() {
  return (
    <>
      <Navbar />
      <div
        className={`${style.slantedImagesAndVideoContainer} ${styles.studentProjectsContainer}`}
      >
        <div
          className={style.slantedVideo}
          style={{
            background: `url(${image}) center/cover no-repeat`,
          }}
        >
          <div className={style.slantedVideotexts}>
            <div className={`${style.content} ${styles.content}`}>
              <h1>PROJECT SHOWCASE</h1>
              <h2>Think | Create | Innovate</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>
          PROJECT SHOWCASE Think | Create | Innovate The Project Design Showcase
          is an event, featuring remarkable work by students from diverse
          academic backgrounds, including BBA, BSIT, and MBA. It's a culmination
          of their dedicated journeys and highlights the successful completion
          of their projects. <br /> <br />
          This showcase is an initiative by the Product Design team, aiming to
          elevate student projects and provide exposure to their innovative
          ideas. This event not only celebrates the students' hard work but also
          provides a platform for them to share their accomplishments with the
          wider community
        </p>
      </div>
      <hr />
      <div className={styles.projectContainer}>
        <div className={styles.textContainer}>
          <span>Fetaured Project</span> <br />
          <p className={styles.pawsome}>Pawsome</p>
          <p>
            Pawsome is an innovative online platform designed for pet owners,
            offering a comprehensive range of pet products and services,
            including expert veterinary care. Dedicated to creating a
            hassle-free and intuitive user experience, Pawsome provides
            convenient access to premium pet products and services. This
            platform stands out by enabling direct connections with veterinary
            professionals ...
          </p>
          <div className={styles.imageContainer}>
            <div className={styles.firstSection}>
              <a href="">
                {" "}
                <img src={project1} alt="project" />
              </a>{" "}
            </div>
            <div className={styles.secondSection}>
              <div className={styles.subcontainer}>
                <a href="">
                  {" "}
                  <img src={project2} alt="project" />
                </a>{" "}
              </div>
              <div className={styles.subcontainer}>
                <div className={styles.secondSubContainer}>
                  {" "}
                  <a href="">
                    {" "}
                    <img src={project1} alt="project" />
                  </a>{" "}
                </div>
                <div className={styles.secondSubContainer}>
                  {" "}
                  <a href="">
                    {" "}
                    <img src={project1} alt="project" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
