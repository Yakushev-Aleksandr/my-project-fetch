// Компонент в котором вводится новый пост
import styles from "./FormAddPost.module.css";
import React, { useState } from "react";
import { Identity } from "@mui/base";

const FormAddPost = (props) => {
  const [statePostTextArea, setStatePostTextArea] = useState(); // Состояние поля TextArea

  const onAddNewPostHandler = (event) => {
    setStatePostTextArea(event.target.value); // Ввод нового элемента Post
  };

  // Подтверждение формы. Отправка ОБЬЕКТА (Поста) в компонент POST
  const sendPostHandler = (event) => {
    event.preventDefault(); // Сбрасывания дефолтного состояния

    // Создается новый ОБЬКТ-ПОСТ
    let newPost = {
      userId: "userId",
      id: props.id.length + 1,
      title: "Я сделал тестовое добавление Поста ",
      body: statePostTextArea,
    };

    props.confirmPost(newPost); // Передаем состояние в компонент POST

    setStatePostTextArea(" "); // Обновляем поле TextArea
  };

  return (
    <div className={styles.frame_post_li}>
      Напишите свой пост
      <form action="" onSubmit={sendPostHandler}>
        <textarea
          onChange={onAddNewPostHandler}
          value={statePostTextArea}
          cols="40"
          rows="5"
        ></textarea>
        <button> Add New Post </button>
      </form>
      <button onClick={props.stateNewComents}>Closed Forma</button>
    </div>
  );
};

export default FormAddPost;
