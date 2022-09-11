/* import styles from "./PostItem.module.css"; */
import { Link } from "react-router-dom";
import { Box, Typography, CardContent /* , Link  */ } from "@mui/material";
const PostItem = (props) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <CardContent>
        <Link to={`/post/UserId/${props.item.userId}`}>
          userId нашего пользователя: "{props.item.userId}"
        </Link>

        <Typography sx={{ mb: 1.5 }} color="text.secondary" id={props.item.id}>
          id: "{props.item.id}"
        </Typography>
        <Typography variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2">{props.item.body}</Typography>
      </CardContent>
    </Box>
  );
};

export default PostItem;
