import styles from "./SkillBar.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaReact,
  FaGitAlt,
  FaPython,
  FaJs,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiVite,
  SiExpress,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

const iconMap = {
  "React.js": <FaReact color="#61DBFB" />,
  "Vite.js": <SiVite color="#946CE6" />,
  "Express.js": <SiExpress color="#000000ff" />,
  "Next.js": <SiNextdotjs color="#000000ff" />,
  Flutter: <SiFlutter color="#02569B" />,
  JavaScript: <FaJs color="#F7DF1E" />,
  Python: <FaPython color="#3572A5" />,
  "C++": <FaCuttlefish color="#00599C" />,
  Dart: <SiDart color="#0175C2" />,
  "RESTful API": <SiPostman color="#FF6C37" />,
  Git: <FaGitAlt color="#F1502F" />,
  MongoDB: <SiMongodb color="#47A248" />,
  Firebase: <SiFirebase color="#FFCA28" />,
  Prisma: <SiPrisma color="#2D3748" />,
};

function SkillBar({ skill, category, level }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.iconWrapper}>{iconMap[skill]}</div>
      <div className={styles.progressWrapper}>
        <CircularProgressbar
          value={(level / 10) * 100}
          strokeWidth={8}
          styles={buildStyles({
            pathColor:
              level >= 8
                ? "url(#high)"
                : level >= 6
                ? "url(#mid)"
                : "url(#low)",
            trailColor: "transparent",
          })}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="high" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#4facfe" />
            </linearGradient>
            <linearGradient id="mid" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#43e97b" />
              <stop offset="100%" stopColor="#38f9d7" />
            </linearGradient>
            <linearGradient id="low" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fce38a" />
              <stop offset="100%" stopColor="#f38181" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.skillLabel}>{skill}</div>
      <div className={styles.categoryLabel}>{category}</div>
    </div>
  );
}

export default SkillBar;
