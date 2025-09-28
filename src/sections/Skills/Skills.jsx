import styles from "./SkillsStyles.module.css";
import SkillBar from "./SkillBar";

const frameworks = [
  { skill: "React.js", category: "Framework", level: 9 },
  { skill: "Next.js", category: "Framework", level: 9 },
  { skill: "Vite.js", category: "Framework", level: 9 },
  { skill: "Express.js", category: "Framework", level: 8 },
  { skill: "Flutter", category: "Framework", level: 5 },
];

const languages = [
  { skill: "JavaScript", category: "Language", level: 9 },
  { skill: "Python", category: "Language", level: 9 },
  { skill: "C++", category: "Language", level: 7 },
  { skill: "Dart", category: "Language", level: 5 },
];

const tools = [
  { skill: "Git", category: "Tool", level: 10 },
  { skill: "RESTful API", category: "Tool", level: 8 },
  { skill: "MongoDB", category: "Tool", level: 7 },
  { skill: "Firebase", category: "Tool", level: 7 },
  { skill: "Prisma", category: "Tool", level: 5 },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillSection}>
        <h2 className={styles.skillCategory}>🧩 Frameworks / Libraries</h2>
        <div className={styles.grid}>
          {frameworks.map((item) => (
            <SkillBar key={item.skill} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.skillCategory}>💻 Programming Languages</h2>
        <div className={styles.grid}>
          {languages.map((item) => (
            <SkillBar key={item.skill} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.skillSection}>
        <h2 className={styles.skillCategory}>
          🧰 Other (Tools, Technologies, Concepts)
        </h2>
        <div className={styles.grid}>
          {tools.map((item) => (
            <SkillBar key={item.skill} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
