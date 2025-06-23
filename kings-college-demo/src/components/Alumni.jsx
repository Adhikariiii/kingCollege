import Modal from "react-modal";
import { useState } from "react";
import style from "./gallery.module.css";
import alumnibackground from "../assets/alumnibackground.jpg";
import singing from "../assets/singingg.jpg";

import Navbar from "./navbar";

// required for accessibility

export default function Alumni({ detail }) {
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
    <div>
      <Navbar />
      <div
        className={style.heading}
        style={{
          background: `url(${alumnibackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className={style.animatedHeading}>Our Alumni</h1>
        <p className={style.animatedParagraph}>
          Westcliff University and King's College alumni: Where the individual
          notes of our student's journeys blend into a symphony, resonating
          through a wider canvas. King's Alumni gracefully connect to larger
          communities, sculpting ideas, and passionately embracing the
          entrepreneurial spirit.
        </p>
      </div>

      <div className={style.contentContainer}>
        <hr />

        <h2>Alumni Class Photos</h2>
        <p>
          King's College Nepal values academic excellence, innovation,
          entrepreneurship, diversity and inclusion, community engagement, and
          social responsibility. The college is committed to providing students
          with a high-quality education that prepares them for leadership roles
          in their chosen fields while instilling in them the values of
          integrity, empathy, and social consciousness.
        </p>
      </div>
      <hr />

      <div className={style.galleryHeading}>
        <h2>Class of MBA (All Programs)</h2>
      </div>

      <div className={style.gallery}>
        {detail.map((person) => (
          <div className={style.card} key={person.id}>
            <div className={style.overlay}></div>
            <img
              className={style.images}
              src={person.image}
              alt={person.name}
              onClick={() => handleOpen(person)}
            />
            <section>
              <p className={style.name}>{person.name}</p>
              <p className={style.role}>{person.role}</p>
            </section>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          className={style.modalView}
          overlayClassName={style.modalOverlay}
        >
          <div className={style.modalContent}>
            <img
              src={selectedImage.image}
              alt="Selected Alumni"
              className={style.modalImage}
            />
            <div className={style.modalText}>
              <h4>{selectedImage.name}</h4>
              <p>Role: {selectedImage.role}</p>
              <p>Joined Date:</p>

              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </Modal>
      )}
      <div
        className={style.slatnedContainer}
        style={{ background: `url(${singing})` }}
      >
        <h1>Alumni Engagement</h1>
        <p>
          Embracing a spirit of shared accomplishment, King's College alumni
          hold a special place in our hearts. Beyond their academic
          achievements, each graduate contributes significantly to the
          betterment of both the individual and society.
        </p>
        <p>
          Our alumni become integral members of the King's family, contributing
          to the college's impact on society long after they graduate. As a
          valued member, you are automatically welcomed into this dynamic
          community, fostering enduring connections with fellow graduates and
          with the alma mater. Join us in this journey of perpetual connection
          and meaningful influence. Together, let's continue to shape a brighter
          future for individuals and society alike.
        </p>
      </div>
    </div>
  );
}
