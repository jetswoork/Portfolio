import styles from "./styles.module.css";
import flecha from "../../assets/png/flecha.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>Portfolio</h2>
      <div className={styles.containerA}>
        <p>Venezuela, Estado Lara.</p>
        <p>(+58) 4245496577</p>
      </div>
      <div className={styles.containerA}>
        <a href="https://www.facebook.com/jesus.tedesco" target="_blank">
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-tedesco-bb9990262/"
          target="_blank"
        >
          Linkedin
        </a>
        <a href="https://github.com/jetswoork" target="_blank">
          GitHub
        </a>
        <a href="https://gitlab.com/jesustedesco" target="_blank">
          GitLab
        </a>
        <a href="mailto:jetswoork@gmail.com" target="_blank">
          gmail
        </a>
      </div>

      <a href="#inicio" className={styles.containerF}>
        <img src={flecha} alt="" />
      </a>
    </div>
  );
};
