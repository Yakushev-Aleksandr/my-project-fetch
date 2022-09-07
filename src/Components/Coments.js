// в этом компоненте происходит логика добавления новых коментариев к посту

import styles from "./Coments.module.css";
import {
  useQuery,
  useMutation,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import ComentItem from "./ComentItem";

const queryClient = new QueryClient();

// Загрузка коментов

let state = {
  coment: [],
};

const Coments = (props) => {
  const [coments, setComents] = useState([]); // Состояния отображения коментариев
  const [stateComentTextArea, setStateComentTextArea] = useState(""); // Состояние поля TextArea

  // Загрузка коментариев. По "props.onSendsComent" вычисляется ID передается с PostAndComents
  const { isLoading, isError, data, refetch } = useQuery(["users"], () => [
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.onSendsComent}/comments`
    )
      .then((response) => response.json())
      .then((json) => setComents((state.coment = json.map((json) => json)))),
  ]);

  // Добавление нового коментария

  function addNewComents(newComent) {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.onSendsComent}/comments`,
      {
        method: "post",
        body: JSON.stringify(newComent),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => json);
  }

  const { mutate } = useMutation(addNewComents, {
    onSuccess: (data, variables, context) => {
      setComents((previousState) => [...previousState, variables]);
    },
  });

  if (isLoading) {
    return <span>Загрузка коментов...</span>;
  }

  const onChangeHandler = (event) => {
    setStateComentTextArea(event.target.value); // Ввод нового элемента
  };

  const sendCommentsHandler = (event) => {
    event.preventDefault(); // Запрещает обновление страницы при отправки формы, по умолчанию

    //   Создание обьекта "Новый коментарий"
    let newComent = {
      postId: Number(props.onSendsComent),
      id: coments.length ? coments[coments.length - 1].id + 1 : 1, //Эта запись позволяет создавать КОМЕНТАРИИ к новым созданным постам и к старым
      name: "Coment test",
      email: "Coment@test.com",
      body: stateComentTextArea,
    };

    mutate(newComent);
    setStateComentTextArea(" "); // Обновляем поле TextArea
  };

  //Загркзка отображения коментариев к данному посту

  const comentItem = coments.map((item) => (
    <ComentItem key={item.id} item={item} />
  ));

  return (
    <div client={queryClient}>
      <div className={styles.frame_coments}>
        {comentItem}

        <form
          onSubmit={sendCommentsHandler}
          value={stateComentTextArea}
          id={props.id}
        >
          <textarea
            onChange={onChangeHandler}
            value={stateComentTextArea}
            id={props.id}
            cols="40"
            rows="5"
          ></textarea>
          <button type="submit"> Sends coment </button>
        </form>
      </div>
    </div>
  );
};

export default Coments;
