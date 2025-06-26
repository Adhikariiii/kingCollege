import styles from "./aboutKings.module.css";
import style from "./homepage.module.css";
import AboutUs from "./aboutUs";
import picture1 from "../assets/aboutkings/picture1.jpg";
import picture2 from "../assets/aboutkings/picture2.jpg";
import Modal from "react-modal";

import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
Modal.setAppElement("#root");

export default function AboutKings({ detail }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (person) => {
    setOpen(true);
    setSelectedImage(person);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };
  return (
    <div className={`${styles.aboutKingsContainer}`}>
      <Navbar />
      <div
        className={`${style.slantedImagesAndVideoContainer} ${styles.subcontainer} `}
      >
        <div
          className={style.slantedVideo}
          style={{
            background: `url(${picture1}) center/cover no-repeat`,
          }}
        >
          <div className={style.slantedVideotexts}>
            <div className={`${style.content} ${styles.headingContent}`}>
              <h1>ABOUT KING'S</h1>

              <p>
                Welcome to King's College, a leading institution of higher
                education in Nepal, dedicated to providing students with a
                transformative learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.slantedImagesAndVideoContainer} `}>
        <div
          className={style.slantedVideo}
          style={{
            background: `url(${picture2}) center/cover no-repeat`,
          }}
        >
          <div className={style.slantedVideotexts}>
            <div className={styles.headingContent}>
              <h1>Message from the president</h1>
              <p>
                Thank you so much for considering King's College for your
                further studies. We wholeheartedly welcome you to our family of
                passionate educators and innovative students. King's College
                essentially offers you a platform. This platform provides a safe
                learning environment where you can explore, experiment, and make
                mistakes without hesitation or judgment. It is a place for a
                diverse group of individuals, from artists to sportspeople,
                researchers to entrepreneurs. We believe in learning from each
                other in a diverse setting and hence value unique identities and
                values over a one-size-fits-all approach. Our academic
                philosophy is rooted in the intersection of entrepreneurship,
                community, and technology. <br />
                We believe that Nepal is blessed with endless possibilities,
                given our communities’ rich heritage, natural resources, and
                human capital. Our entrepreneurial education aims to develop an
                entrepreneurial mindset among students while equipping them with
                the latest technological skills. By leveraging our youth, we can
                serve as a catalyst for change, creating inclusive and equitable
                economic development in Nepal.e.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.textcontent}>
          <h1 className={styles.textContentHeading}>OUR MISSION</h1>
          <p>
            Within our walls and beyond, our mission is to passionately nurture
            an entrepreneurial spirit, instilling in our students not just
            knowledge but a transformative way of thinking. <br />
            Our focus lies in the meaningful difference we make through academic
            excellence and holistic development. We aspire to lead educational
            advancements with a deep-rooted dedication to shaping future
            leaders.
            <hr />
          </p>
          <hr />
          <h1 className={styles.textContentHeading}>OUR VISION</h1>
          <p>
            To be a catalyst for societal transformation through
            entrepreneurship. As we diligently strive to achieve this vision,
            our mission remains grounded in nurturing entrepreneurial minds,
            capable and eager to harness Nepal's abundant, yet untapped,
            resources. <br />
            We firmly believe education is a shared responsibility, a public
            asset, and thus we hold ourselves accountable to the communities we
            serve. Our educational philosophy, driven by progressiveness,
            revolves around the ‘Community as Curriculum’ approach, placing the
            needs and aspirations of our community at the heart of what we
            teach.
            <hr />
          </p>

          <h1 className={styles.textContentHeading}>OUR PHILOSOPHY</h1>
          <p>
            We provide quality higher education, with a focus on
            entrepreneurship, as a vital social initiative. Collaboratively
            engaging with our community, we aim to drive positive change and
            contribute to the greater good. We hold ourselves accountable,
            collaborate with humility, empower with grace, innovate with joy,
            and above all, uphold firm integrity.. <br />
            Join us on this humble journey of shaping a brighter future for our
            society, where education is an agent of hope and transformation.
            leaders.
            <hr />
          </p>
        </div>
        <AboutUs />
        <div className={styles.kingsCentre}>
          <h1>King's Centers</h1>
          <p>
            King's Centers are at the heart of our learning and socializing
            experience. Unveil the initiatives of King's College where students
            and faculty can enhance their learning, nurture their growth and
            explore breakthroughs through its independently functioning centers.
          </p>
          <div className={styles.ButtonContainer}>
            <button>CREAD</button>
            <button>CENTER FOR SOCIAL EMOTIONAL LEARNING</button>
          </div>
          <hr />
        </div>
        <h1 style={{ marginLeft: "40%", padding: "1rem" }}>MEET OUR TEAM</h1>
        <div className={styles.gallery}>
          {detail.map((person) => (
            <div className={styles.card} key={person.id}>
              <div className={styles.overlay}></div>
              <img
                className={styles.images}
                src={person.image}
                alt={person.name}
                onClick={() => handleOpen(person)}
              />
              <section>
                <p className={styles.name}>{person.name}</p>
                <p className={styles.role}>{person.role}</p>
              </section>
            </div>
          ))}
        </div>
        {selectedImage && (
          <Modal
            isOpen={open}
            onRequestClose={handleClose}
            className={styles.modalView}
            overlayClassName={styles.modalOverlay}
          >
            <div className={styles.modalContent}>
              <img
                src={selectedImage.image}
                alt="Selected Alumni"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "70vh",
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className={styles.modalText}>
                <h4>{selectedImage.name}</h4>
                <p>Role: {selectedImage.role}</p>
                <p>Joined Date:</p>

                <button onClick={handleClose}>Close</button>
              </div>
            </div>
          </Modal>
        )}
        <hr />
        <div className={styles.deadlineContainer}>
          <div className={styles.deadlineContainer}>
            <p>
              Don't miss your chance to unlock your potential - apply now to
              King's College Nepal and discover endless opportunities for growth
              and success in your chosen field!
            </p>
            <p className={styles.deadLine}>
              Admission Deadline: <span> July 29, 2025</span>
            </p>
            <button>APPLY NOW</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
