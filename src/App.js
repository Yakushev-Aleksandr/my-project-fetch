import React, { useEffect, useState } from "react";
import Post from "./Components/Post";

import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Post />
    </QueryClientProvider>
  );
}

export default App;
