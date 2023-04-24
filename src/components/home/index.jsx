import styles from "./styles.module.css";
import github from "../../assets/png/github.png";
import link from "../../assets/png/link.png";
import whatsapp from "../../assets/png/whatsapp.png";
import yo from "../../assets/png/yo.png";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div
        className={`${styles.containerText} animate__animated animate__zoomInUp`}
      >
        <h3>Hola, soy</h3>
        <h1>Jesus Tedesco</h1>
        <h2>Frontend Developer</h2>
        <h4>
          tengo 27 años, Venezolano. Soy Desarrollador Frontend tengo 2 años de
          experiencia he trabajado en varios proyectos freelance.
          <br />
          <br />
          Soy tecnico superior en mercadotecnia, actualmente estudio Ingeniería
          informática.
          <br />
          <br />
          Actualmente trabajo remoto con la empresa wodeva. Estoy encargado del
          frontend en un proyecto basado en venta de cursos on line.
        </h4>
        <a
          className={styles.whatsapp}
          href="https://wa.me/+584245496577"
          target="_blank"
        >
          <button>
            Hablemos <img src={whatsapp} alt="" />
          </button>
        </a>

        <div className={styles.check}>
          <h3>Echa un vistaso a mi</h3>
          <a
            className={styles.container}
            href="https://github.com/jetswoork"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>

          <a
            className={styles.container}
            href="https://www.linkedin.com/in/jesus-tedesco-bb9990262/"
            target="_blank"
          >
            <img src={link} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.figure}>
          <img
            className="animate__animated animate__zoomInUp"
            src={yo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
