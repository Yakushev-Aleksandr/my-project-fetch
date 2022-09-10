import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <div className={styles.error_title}>ERROR</div>
      <div className={styles.error_text}>
        Вы перешли на несуществующую страницу. Вернитесь назад нажавши эту
        кнопку
        <Link to="/">
          <button className={styles.error_button}> HOME </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
