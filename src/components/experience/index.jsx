import styles from "./styles.module.css";
import mexico from "../../assets/png/mexico.png";
import argentina from "../../assets/png/argentina.png";
import reac from "../../assets/png/reac.png";

export const Experience = () => {
  return (
    <div className={styles.experience} id="experiencia">
      <h1>Experiencia Profesional</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={reac} alt="" />

          <h3>Desarrollador Frontend</h3>
          <h4> ( Remoto ) Mayo. 2021 - Marzo. 2022 </h4>
          <p>
            Trabaje en la Aplicacion Web EFEM: Una aplicación web para el
            seguimiento de proyectos y relaciones del cliente.
          </p>
          <div className={styles.bandera}>
            <img src={mexico} alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <img src={reac} alt="" />
          <h3>Desarrollador Frontend</h3>
          <h4>Empresa: Wodeva ( Remoto ) | Octubre. 2022 - Actualidad </h4>
          <p>
            Trabajo actualmente en la Aplicación Web Munda: una aplicación web
            para la venta y compra de cursos y clases Online.{" "}
          </p>
          <div className={styles.bandera}>
            <img src={argentina} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
