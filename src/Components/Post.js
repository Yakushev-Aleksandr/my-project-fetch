// В этом компоненте происходит выгрузка всех постов и добавление новых

import styles from "./Post.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import PostAndComents from "./PostAndComents"; // Компонент что выводит все посты
import FormAddPost from "./FormAddPost"; // Компонент для добавления нового поста
import CircularStatic from "./MuiElements/CircularStatic";

import {
  useQuery,
  useMutation,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

// создается копия постов
let state = {
  post: [],
};

const Post = (props) => {
  const [posts, setPosts] = useState([]); // Состояния для отображения Постов
  const [stateNewComents, setStateNewComents] = useState(false); // Состояние которое включает видимость компонента FormAddPost

  // функция загрузки всех постов
  function showAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts((state.post = json.map((json) => json))));
  }

  // функция добавления нового поста
  function addNewPost(newPost) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  }

  // Выгрузка всех  постов
  const { isLoading, isError, data, refetch } = useQuery(
    ["list"],
    useEffect(() => {
      showAllPosts();
    }, [])
  );

  // Добавление нового поста
  const { mutate } = useMutation(addNewPost, {
    onSuccess: (data, variables, context) => {
      setPosts((previousState) => [...previousState, variables]);
    },
  });

  if (isLoading) {
    return (
      <div>
        <CircularStatic />
      </div>
    );
  }

  // Кнопка переключения состояния для ОТОБРАЖЕНИЯ поля ввода Нового поста
  const addNewPostHandler = () => {
    setStateNewComents((previousState) => true);
  };

  // Кнопка переключения состояния для СКРЫТИЯ поля ввода Нового поста
  const setStateNewComentsHandlers = (event) => {
    setStateNewComents((previousState) => false);
  };

  // Добавление нового ОБЬЕКТА (поста) с компонента FormAddPost
  const confirmPostHandler = (newPost) => {
    mutate(newPost);
  };

  // Компонент отображающий все посты
  const allPostAndComents = posts.map((item) => (
    <PostAndComents key={item.id} item={item} id={item.id} />
  ));

  return (
    <QueryClientProvider client={queryClient}>
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "green", textAlign: "center" }}
      >
        POST
      </Typography>

      <div>
        <Button
          onClick={addNewPostHandler}
          variant="contained"
          color="success"
          sx={{ margin: "15px 15px 0 15px" }}
        >
          Add new post
        </Button>
        {stateNewComents && (
          <FormAddPost
            stateNewComents={setStateNewComentsHandlers}
            id={posts}
            className={styles.frame_li}
            statePost={state.post}
            confirmPost={confirmPostHandler}
          />
        )}
        {allPostAndComents}
      </div>
    </QueryClientProvider>
  );
};

export default Post;
