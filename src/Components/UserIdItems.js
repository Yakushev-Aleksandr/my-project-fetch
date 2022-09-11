/* import styles from "./UserIdItems.module.css"; */
import { Box, Typography, CardContent, Card } from "@mui/material";

const UserIdItems = (props) => {
  return (
    <Box
      sx={{
        minWidth: 275,
        margin: "15px 15px 0 15px",
        boxShadow: "5px 5px 2px 1px rgba(255, 0, 0, 0.2)",
      }}
    >
      <Card variant="outlined">
        <CardContent sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            userId = {props.item.userId}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            id={props.item.id}
          >
            id: "{props.item.id}"
          </Typography>
          <Typography variant="h5" component="div">
            {props.item.title}{" "}
          </Typography>

          <Typography variant="body2"> {props.item.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserIdItems;
