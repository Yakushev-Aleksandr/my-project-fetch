import styles from "./PostItem.module.css";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <div>
      <li>
        <Link to={`/post/UserId/${props.item.userId}`}>
          userId нашего пользователя: "{props.item.userId}"
        </Link>

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
