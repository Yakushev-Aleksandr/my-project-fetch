import styles from "./ComentItem.module.css";

const ComentItem = (props) => {
  return (
    <div className={styles.frame_coments_li}>
      <li>
        <div> postId = {props.item.postId}</div>
        <div> id = {props.item.id}</div>
        <div> name ={props.item.name}</div>
        <div> email ={props.item.email}</div>
        <div> body = {props.item.body}</div>
      </li>
    </div>
  );
};

export default ComentItem;
