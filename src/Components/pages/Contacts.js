import styles from "./Contacts.module.css";

import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <div className={styles.contacts_title}>CONTACTS</div>
      <div className={styles.contacts_text}>
        Украина, город Киев, просрект героев небесной сотни, 36/1
      </div>
      <Link to="/">
        <button className={styles.contacts_button}> HOME </button>
      </Link>
    </div>
  );
};

export default Contacts;
