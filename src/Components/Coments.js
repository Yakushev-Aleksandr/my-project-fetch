// в этом компоненте происходит логика добавления новых коментариев к посту

/* import styles from "./Coments.module.css"; */
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  TextField,
  Card,
  CardActions,
  Button,
} from "@mui/material";
import ComentItem from "./ComentItem";

// Загрузка коментов

let state = {
  coment: [],
};

const Coments = (props) => {
  const [coments, setComents] = useState([]); // Состояния отображения коментариев
  const [stateComentTextArea, setStateComentTextArea] = useState(""); // Состояние поля TextArea

  // Загрузка коментариев. По "props.onSendsComent" вычисляется ID передается с PostAndComents
  const { isLoading } = useQuery(["users"], () => [
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
    <Box
      sx={{
        minWidth: 275,
      }}
    >
      <Card variant="outlined">
        {comentItem}

        <form
          onSubmit={sendCommentsHandler}
          value={stateComentTextArea}
          id={props.id}
        >
          <TextField
            onChange={onChangeHandler}
            value={stateComentTextArea}
            id={props.id}
            id="outlined-multiline-static"
            label="Add new comment"
            multiline
            sx={{
              width: "calc(100% - 30px)",
              margin: "15px 0px 15px 15px",
              boxShadow: "5px 5px 2px 1px rgba(216, 250, 8, 0.2)",
            }}
            rows={5}
          ></TextField>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "green" }}
            >
              Send coment
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
};

export default Coments;
