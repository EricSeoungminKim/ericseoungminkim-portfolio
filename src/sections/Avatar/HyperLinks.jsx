import styles from "./Avatar.module.css";
import linkedInIcon from "../../assets/linkedIn.svg";
import githubLight from "../../assets/githubLight.svg";
import githubDark from "../../assets/githubDark.svg";
import devpostLight from "../../assets/devPostLight.svg";
import devpostDark from "../../assets/devPostDark.svg";
import instagramIcon from "../../assets/instagram.svg";
import { useTheme } from "../../common/ThemeContext";

function Hyperlinks() {
  const { theme, toggleTheme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const devpostIcon = theme === "light" ? devpostLight : devpostDark;

  return (
    <span>
      <a
        href="https://www.linkedin.com/in/seoungmin-kim-400597222/"
        target="_blank"
      >
        <img src={linkedInIcon} alt="LinkedIn Icon" />
      </a>
      <a href="https://github.com/EricSeoungminKim" target="_blank">
        <img src={githubIcon} alt="Github Icon" />
      </a>
      <a
        href="https://devpost.com/EricSeoungminKim?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        target="_blank"
      >
        <img src={devpostIcon} alt="Devpost Icon" />
      </a>
      <a href="https://www.instagram.com/seoungmin.kim/" target="_blank">
        <img src={instagramIcon} alt="Instagram Icon" />
      </a>
    </span>
  );
}

export default Hyperlinks;
