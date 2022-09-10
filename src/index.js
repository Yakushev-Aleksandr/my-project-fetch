import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
      <div>
        <div
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          МЫ ИЗУЧАЕМ REACT
        </div>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/post"> POST </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contacts"> CONTACTS </Link>
        <Link to="/"> HOME </Link>
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="post" element={<Post />} />
        <Route path="post/UserId/:id" element={<AllUserId />} />
        {/* <Route path="post" element={<Post />}>
          <Route path=":id" element={<AllUserId />} />
        </Route> */}
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        <div>____________________________________________________</div>
        Все права защищены
      </footer>
      {/*   <Outlet /> */}
    </QueryClientProvider>
  </BrowserRouter>
);
