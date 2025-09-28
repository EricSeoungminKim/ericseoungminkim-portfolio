import React from "react";
import styles from "./JobsStyles.module.css";
import hoopsterz from "../../assets/hoopsterz.png";
import Job from "./JobCard.jsx";

function Jobs() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Job Experience</h1>
      {/* Hoopsterz*/}
      <div className={styles.jobContainer}>
        <Job
          src={hoopsterz}
          link="https://hoopsterz.vercel.app/"
          h3="Pick-Up Basketball Match-Up Platform"
          p="Hoopsterz [Live NOW!]"
        />
      </div>
    </section>
  );
}

export default Jobs;
