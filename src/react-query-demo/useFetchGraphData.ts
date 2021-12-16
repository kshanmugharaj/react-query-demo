import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

export type Filter = {
  filter1?: string;
  filter2?: string;
};

export type Params = {
  id: number;
  filter?: Filter;
};

type GraphData = Array<{
  name: string;
  value: number;
}>;

export const useFetchGraphData = (params: Params) => {
  return useQuery({
    // The key in which the server data is stored in cache.
    queryKey: ["data", params],
    // Function that returns fetches data from server
    queryFn: async () => {
      // Mock api just gives back the same what we send.
      const { data } = await axios.post<GraphData>("/graph-data", params);
      return data;
    },
    // Tries refetching the api as long as the no of failures is less than 5 and http response code is 429.
    retry: (failureCount: number, error: AxiosError) => {
      if (failureCount > 2 || error.response?.status !== 429) {
        return false;
      }
      return true;
    },
    // Try refetching every two seconds until the 'retry' condition satisfies.
    retryDelay: 2 * 1000,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });
};
