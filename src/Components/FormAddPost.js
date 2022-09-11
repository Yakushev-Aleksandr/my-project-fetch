// Компонент в котором вводится новый пост
/* import styles from "./FormAddPost.module.css"; */
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
    <Box
      sx={{
        minWidth: 275,
        margin: "15px 15px 0 15px",
        boxShadow: "5px 5px 2px 1px rgba(22, 84, 5, 0.2)",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography> Напишите свой пост</Typography>
        </CardContent>
        <form
          action=""
          onSubmit={sendPostHandler}
          style={{ padding: "0 15px 0 15px" }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Add new post"
            multiline
            onChange={onAddNewPostHandler}
            value={statePostTextArea}
            sx={{
              width: "100%",
              margin: "15px 0px 15px 0px",
              boxShadow: "5px 5px 2px 1px rgba(22, 84, 5, 0.2)",
            }}
            rows={5}
          ></TextField>
          <CardActions>
            <Button
              variant="contained"
              sx={{ backgroundColor: "green" }}
              onClick={sendPostHandler}
            >
              Add New Post
            </Button>
          </CardActions>
        </form>
        <CardActions>
          <Button
            onClick={props.stateNewComents}
            variant="contained"
            sx={{ backgroundColor: "red" }}
          >
            Closed Forma
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FormAddPost;
