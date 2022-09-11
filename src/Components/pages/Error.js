import { Link } from "react-router-dom";
import { Button, Typography, Card, Box } from "@mui/material";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <Box sx={{ display: "block", marginTop: "35px" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "red", textAlign: "center" }}
      >
        ERROR
      </Typography>

      <Typography variant="h4">
        Вы перешли на несуществующую страницу. Вернитесь назад нажавши на эту
        кнопку <span> </span>
        <Link to="/">
          <Button variant="outlined"> HOME </Button>
        </Link>
      </Typography>
    </Box>
  );
};

export default Error;
