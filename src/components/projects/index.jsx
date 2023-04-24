import styles from "./styles.module.css";
import jetsMovie from "../../assets/jpg/jetsMovie.jpg";
import fakebook from "../../assets/jpg/fakebook.jpg";

export const Projects = () => {
  return (
    <div className={styles.proyectos} id="proyectos">
      <h1>Proyectos Personales</h1>
      <div className={styles.containerP}>
        <a
          className={styles.card}
          href="https://jetsmovie.netlify.app/"
          target="_blank"
        >
          <div className={styles.containerImg}>
            <img src={jetsMovie} alt="" />
          </div>
          <div className={styles.containerTexts}>
            <h2>JetsMovie</h2> <p>Una aplicacion web de Peliculas</p>
          </div>
        </a>
        <a
          className={styles.card}
          href="https://fakeebook.netlify.app/"
          target="_blank"
        >
          <div className={styles.containerImg}>
            <img src={fakebook} alt="" />
          </div>
          <div className={styles.containerTexts}>
            <h2>Fakebook</h2> <p>Una aplicacion web similar a facebook</p>
          </div>
        </a>
      </div>
    </div>
  );
};
