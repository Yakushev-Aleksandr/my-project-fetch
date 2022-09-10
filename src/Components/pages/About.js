import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className={styles.about_title}>ABOUT</div>
      <div className={styles.about_text}>
        Мы команда профессионалов. Работаем над React Routerom, у нас все очень
        круто получается!
      </div>
      <Link to="/">
        <button className={styles.about_button}> HOME </button>
      </Link>
    </div>
  );
};

export default About;
