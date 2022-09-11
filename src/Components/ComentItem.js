/* import styles from "./ComentItem.module.css"; */
import { Box, Typography, CardContent, Card } from "@mui/material";
const ComentItem = (props) => {
  return (
    <Box
      sx={{
        minWidth: 275,
        margin: "15px 15px 0 15px",
        boxShadow: "5px 5px 2px 1px rgba(216, 250, 8, 0.2)",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            postId = {props.item.postId}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            id = {props.item.id}
          </Typography>
          <Typography variant="h5" component="div">
            name ={props.item.name}
          </Typography>
          <Typography variant="h6" component="div">
            email ={props.item.email}
          </Typography>
          <Typography variant="body2"> body = {props.item.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ComentItem;
