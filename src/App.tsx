import React from "react";
import axios from "axios";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { BASE_API_URL } from "~/constants";
import { ReactQueryDemo } from "~/react-query-demo";

export const queryClient = new QueryClient();

axios.defaults.baseURL = BASE_API_URL;

export const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ReactQueryDemo />
    </QueryClientProvider>
  );
};
