import styles from "./UserIdItems.module.css";

const UserIdItems = (props) => {
  return (
    <div className={styles.frame_userIdItem}>
      <li>
        <div> userId = {props.item.userId}</div>
        <div> id = {props.item.id}</div>
        <div> name ={props.item.title}</div>

        <div> body = {props.item.body}</div>
      </li>
    </div>
  );
};

export default UserIdItems;
