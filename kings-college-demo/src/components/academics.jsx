import style from "./academics.module.css";

export default function Academics() {
  return (
    <>
      <div className={style.academicsContainer}>
        <div className={style.courseContents}>
          {" "}
          <h1>
            <a href="#">MBA</a>
          </h1>
          <a href="#">Financial Management</a>
          <a href="#">Marketing Management</a>
          <a href="#">Human Resource Management</a>
          <a href="#">Data Analytics</a>
          <a href="#">Entrepreneurship</a>
          <a href="#">Tech and Innovation</a>
          <a href="#">Non-Profit</a>
          <a href="#">Agribusiness Management</a>
          <a href="#">Applied AI in Business</a>
        </div>
        <div className={style.courseContents}>
          <h1>
            <a href="#">BBA</a>
          </h1>
          <a href="#">FinTech</a>
          <a href="#">Marketing Management</a>
          <a href="#">Human Resource Management</a>
          <a href="#">Investment and Economics</a>
          <a href="#">Digital Marketing</a>
          <a href="#">Applied Art and Design</a>
          <a href="#">Finance Management</a>
          <a href="#">Business Analytics</a>
          <a href="#">Global Accounting</a>
        </div>
        <div className={style.courseContents}>
          {" "}
          <h1>
            <a href="#">BSIT</a>
          </h1>
          <a href="#">Cybersecurity</a>
          <a href="#">Cloud Computing</a>
          <a href="#">IT Project Management</a>
        </div>
        <div className={style.courseContents}>
          <h1>
            <a href="#">BSCS</a>
          </h1>
          <a href="#">Software and Web App Development</a>
          <a href="#">Data Science</a>
          <a href="#">Artificial Intelligence (AI)</a>
        </div>
      </div>
    </>
  );
}
