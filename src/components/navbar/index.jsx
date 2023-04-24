import styles from "./styles.module.css";
import reactt from "../../assets/skill/reactt.png";

export const Navbar = () => {
  return (
    <div className={`${styles.navbar} animate__animated animate__fadeIn`}>
      <div className={styles.logo} id="inicio">
        <img src={reactt} alt="" /> <h2>Portfolio</h2>
      </div>
      <div className={styles.row}>
        <div>
          <a href="#experiencia">Experiencia</a>
        </div>
        <div>
          <a href="#habilidades">Habilidades</a>
        </div>
        <div>
          <a href="#proyectos">Proyectos</a>
        </div>
      </div>
      <div className={styles.logo2}>
        <h2>Portfolio</h2>
        <img src={reactt} alt="" />
      </div>
    </div>
  );
};
