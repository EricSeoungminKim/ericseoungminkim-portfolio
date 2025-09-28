import styles from "./Avatar.module.css";

function Description() {
  return (
    <section className={styles.descriptionContainer}>
      <h1 className={styles.descriptionTitle}>Career Objective</h1>
      <div className={styles.description}>
        <p>
          Passionate and adaptable Software Engineer with a strong drive to
          learn and apply diverse technologies.
        </p>
        <p>
          Founded, Built, and Deployed a{" "}
          <strong>"Pick-up basketball platform"</strong> in South Korea using{" "}
          <strong>React, Vite.js, and Express</strong> (
          <strong>Hoopsterz</strong>,
          <a href="https://hoopsterz.vercel.app/"> hoopsterz.vercel.app</a>).
        </p>
        <p>
          Led development of the UCLA Korean website using{" "}
          <strong>React</strong> and <strong>Node.js</strong>, connecting{" "}
          <strong>500+</strong> Korean students and organizations.
        </p>
        <p>
          Created a <strong>3D RPG</strong> game in <strong>Unity</strong> with{" "}
          <strong>C#</strong>, and built cross-platform web and mobile apps
          using <strong>Flutter</strong> and <strong>Prisma</strong> backend
          during <strong>HackSC</strong>.
        </p>
        <p>
          Eager to deliver scalable, user-focused solutions through continuous
          learning.
        </p>
      </div>
    </section>
  );
}

export default Description;
