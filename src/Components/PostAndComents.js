//  Компонент в котором включаеются показ коментариев и передача значения ID поста

import React, { useState } from "react";
/* import styles from "./PostAndComents.module.css"; */

/* import { Outlet } from "react-router-dom"; */
import { Box, Card, CardActions, Button } from "@mui/material";
import PostItem from "./PostItem";
import Coments from "./Coments";

const PostAndComents = (props) => {
  const [sendConemts, setSendConemts] = useState(); // Передается значение ID по которому была нажата кнопка Show Comment
  const [switchPostConemts, setSwitchPostConemts] = useState(false); // Показует и скрывает окно с коментариями

  const showComentHandler = (event) => {
    setSendConemts(event.target.id); //  Передается значение ID в компонент Coment
    setSwitchPostConemts((previousState) => !previousState);
  };

  return (
    <Box
      sx={{
        minWidth: 275,
        margin: "20px 15px 0 15px",

        boxShadow: "5px 5px 2px 1px rgba(0, 0, 255, 0.2)",
      }}
    >
      <Card variant="outlined">
        <PostItem item={props.item} />
        <CardActions>
          <Button
            variant="contained"
            key={props.item.id}
            id={props.item.id}
            onClick={showComentHandler}
          >
            Show Comment
          </Button>
        </CardActions>

        {switchPostConemts && (
          <Coments id={props.id} onSendsComent={sendConemts} />
        )}
      </Card>
    </Box>
  );
};

export default PostAndComents;
