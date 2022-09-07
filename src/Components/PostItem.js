import styles from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <div>
      <li>
        <div> userId = {props.item.userId}</div>
        <div id={props.item.id}> id = {props.item.id}</div>
        <div className={styles.frame_post_li_title}>
          title ={props.item.title}
        </div>
        <div className={styles.frame_post_li_body}>
          body = {props.item.body}
        </div>
      </li>
    </div>
  );
};

export default PostItem;
