import styles from "./Avatar.module.css";
import avatarImg from "../../assets/avatar.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";
import Hyperlinks from "./HyperLinks";
import Description from "./Description";

function Avatar() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="avatar" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Avatar}
          src={avatarImg}
          alt="Profile picture of Seoungmin Kim"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Bright/Dark Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Seoungmin <br /> Kim
        </h1>
        <h2>Electrical Engineering @UCLA</h2>
        <>
          <Hyperlinks />
        </>
        <>
          <Description />
        </>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Avatar;
