import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import "@fontsource/roboto/500.css";
import "./index.css";
import App from "./App";
import About from "./Components/pages/About";
import Contacts from "./Components/pages/Contacts";
import Error from "./Components/pages/Error";

import Post from "./Components/Post";
import AllUserId from "./Components/AllUserId";

import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Box>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            МЫ ИЗУЧАЕМ REACT
          </Typography>
        </Box>
        <Box
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/post" style={{ textDecoration: "none" }}>
            <Button variant="contained">POST</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button variant="contained">ABOUT</Button>
          </Link>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <Button variant="contained">CONTACTS</Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">HOME</Button>
          </Link>
        </Box>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="post" element={<Post />} />
          <Route path="post/UserId/:id" element={<AllUserId />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  </BrowserRouter>
);
