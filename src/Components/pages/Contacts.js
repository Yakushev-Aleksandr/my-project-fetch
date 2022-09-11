import styles from "./Contacts.module.css";

import { Link } from "react-router-dom";
import { Button, Typography, Card, Box } from "@mui/material";

const Contacts = () => {
  return (
    <Box sx={{ display: "block", marginTop: "35px" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "Blue", textAlign: "center" }}
      >
        CONTACTS
      </Typography>
      <Typography variant="h4">Украина, город Киев</Typography>
      <Link to="/">
        <Button variant="outlined"> HOME </Button>
      </Link>
    </Box>
  );
};

export default Contacts;
