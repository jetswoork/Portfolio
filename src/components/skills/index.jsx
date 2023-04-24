import styles from "./styles.module.css";
import reactt from "../../assets/skill/reactt.png";
import gatsby from "../../assets/skill/gatsby.png";
import css from "../../assets/skill/css.png";
import git from "../../assets/skill/git.png";
import github from "../../assets/skill/github.png";
import gitlab from "../../assets/skill/gitlab.png";
import html from "../../assets/skill/html.png";
import javascript from "../../assets/skill/javascript.png";
import jira from "../../assets/skill/jira.png";
import reduxx from "../../assets/skill/reduxx.png";

const images = [
  html,
  css,
  javascript,
  reactt,
  reduxx,
  gatsby,
  git,
  github,
  gitlab,
  jira,
];

export const Skills = () => {
  return (
    <div className={styles.habilidades} id="habilidades">
      <h1>Habilidades</h1>
      <div className={styles.containerH}>
        {images.map((image, key) => (
          <div key={key} className={styles.containerImg}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
