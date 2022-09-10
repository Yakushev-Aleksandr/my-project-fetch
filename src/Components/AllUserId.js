import {
  QueryClientProvider,
  useQuery,
  QueryClient,
} from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import styles from "./AllUserId.module.css";
import UserIdItems from "./UserIdItems";

import { useParams } from "react-router-dom";

const queryClient = new QueryClient();

let state = {
  userIdPosts: [],
};

const AllUserId = () => {
  const [userIdshow, setUserIdshow] = useState();
  const { id } = useParams();

  function showAllUserIdPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((json) =>
        setUserIdshow((state.userIdPosts = json.map((json) => json)))
      );
  }

  console.log(userIdshow);

  const { isLoading, isError } = useQuery(
    ["IdPost"],
    useEffect(() => {
      showAllUserIdPosts();
    }, [])
  );

  if (isLoading) {
    return <span>ЖДИ...</span>;
  }

  const userIdItem = userIdshow.map((item) => (
    <UserIdItems key={item.id} item={item} />
  ));

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.frame_AllUserId}>{userIdItem}</div>
    </QueryClientProvider>
  );
};

export default AllUserId;
