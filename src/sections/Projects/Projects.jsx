import React from "react";
import styles from "./ProjectsStyles.module.css";
import xinshen from "../../assets/xinshen.svg";
import koreanPage from "../../assets/koreanPage.png";
import netchill from "../../assets/netchill.jpg";
import hang from "../../assets/hang.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      {/* NetChill (DevPost Link)*/}
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={netchill}
          link="https://devpost.com/software/netchill#updates"
          h3="NetWorking Mobile Platform"
          p="HackSC 23 Project [Winner]"
        />
        {/* Hang (DevPost Link) */}
        <ProjectCard
          src={hang}
          link="https://devpost.com/software/hang-h8mecf"
          h3="Auto-Suggesting Hangout planner"
          p="LA Hacks 23 Project"
        />
        {/* UCLA Korean Website */}
        <ProjectCard
          src={koreanPage}
          link="https://github.com/EricSeoungminKim/UCLA_Hanin#"
          h3="UCLA Korean Website"
          p="Check the Code"
        />
        {/* 3D Game XinShen */}
        <ProjectCard
          src={xinshen}
          link="https://github.com/EricSeoungminKim/Xinshen"
          h3="UCLA ACM Studio'23 Game Project"
          p="3D RPG Game built with Unity"
        />
      </div>
    </section>
  );
}

export default Projects;
