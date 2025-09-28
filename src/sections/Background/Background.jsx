import styles from "./Background.module.css";

function Background() {
  return (
    <section>
      <div className={styles.description}>
        <p>
          Hello! I'm <strong className={styles.highlight}>Seoungmin Kim</strong>
          , an international student at the University of California, Los
          Angeles (UCLA), majoring in{" "}
          <strong className={styles.highlight}>Electrical Engineering</strong>{" "}
          with a{" "}
          <strong className={styles.highlight}>
            Tech Breadth in Computer Science
          </strong>
          . I’m passionate about both software and hardware, constantly
          exploring new technologies through hackathons, side projects, and
          collaborative work.
        </p>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.timelineYear}>2021</span>
            <p>
              🎓 Graduated from{" "}
              <strong>Korea Christian International School (KCIS)</strong>.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <span className={styles.timelineYear}>2021</span>
            <p>
              🎉 Admitted to <strong>UCLA</strong> to pursue Electrical
              Engineering with a CS tech breadth.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <span className={styles.timelineYear}>2023 - 2025</span>
            <p>
              🇰🇷 Took a gap from studies to serve in the{" "}
              <strong>Republic of Korea Air Force</strong> as part of my
              national duty, working in the{" "}
              <strong>Civil Engineering Squadron</strong>.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <span className={styles.timelineYear}>2025</span>
            <p>
              🚀 Resumed studies at UCLA and re-engaged with the tech community,
              participating in hackathons, research, and building impactful
              projects.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <span className={styles.timelineYear}>2027</span>
            <p>
              🎓 Expected to graduate from UCLA with a Bachelor of Science in
              Electrical Engineering.
            </p>
          </div>
        </div>

        <p>
          I enjoy working across the stack—from{" "}
          <strong className={styles.highlight}>front-end interfaces</strong> to{" "}
          <strong className={styles.highlight}>backend systems</strong> and even{" "}
          <strong className={styles.highlight}>hardware design</strong>. I'm
          actively seeking opportunities to contribute to projects that
          challenge me technically and encourage growth through collaboration.
        </p>
        <p>
          I'm always open to new challenges, especially{" "}
          <strong className={styles.highlight}>hackathons</strong>,{" "}
          <strong className={styles.highlight}>startups</strong>, and{" "}
          <strong className={styles.highlight}>research opportunities</strong>.
          Let’s build something impactful together!
        </p>
      </div>
    </section>
  );
}

export default Background;
