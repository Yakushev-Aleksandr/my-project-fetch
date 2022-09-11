import styles from "./About.module.css";

import { Link } from "react-router-dom";
import { Button, Typography, Card, Box } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ display: "block", marginTop: "35px" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "blue", textAlign: "center" }}
      >
        ABOUT
      </Typography>
      <Typography variant="h4">Сдесь должен быть текст о нас...</Typography>
      <Link to="/">
        <Button variant="outlined"> HOME </Button>
      </Link>
    </Box>
  );
};

export default About;
