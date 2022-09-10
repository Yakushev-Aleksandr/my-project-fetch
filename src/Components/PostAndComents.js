//  Компонент в котором включаеются показ коментариев и передача значения ID поста

import React, { useState } from "react";
import styles from "./PostAndComents.module.css";
import PostItem from "./PostItem";
import Coments from "./Coments";
import { Outlet } from "react-router-dom";

const PostAndComents = (props) => {
  const [sendConemts, setSendConemts] = useState(); // Передается значение ID по которому была нажата кнопка Show Comment
  const [switchPostConemts, setSwitchPostConemts] = useState(false); // Показует и скрывает окно с коментариями

  const showComentHandler = (event) => {
    setSendConemts(event.target.id); //  Передается значение ID в компонент Coment
    setSwitchPostConemts((previousState) => !previousState);
  };

  return (
    <div className={styles.frame_post_li}>
      <PostItem item={props.item} />
      <button
        key={props.item.id}
        id={props.item.id}
        onClick={showComentHandler}
      >
        Show Comment
      </button>

      {switchPostConemts && (
        <Coments id={props.id} onSendsComent={sendConemts} />
      )}
      <Outlet />
    </div>
  );
};

export default PostAndComents;
