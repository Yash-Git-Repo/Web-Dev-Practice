import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import apiClient from "../utils/api-client";

const useFetchUsers = (query) => {
  const fetchTodos = (pageParam = 1) => {
    return apiClient
      .get(`/todos/`, {
        params: {
          _limit: query.pageSize,
          _start: (pageParam - 1) * query.pageSize,
        },
      })
      .then((res) => res.data);
  };
  return useInfiniteQuery({
    queryKey: ["todos", query],
    queryFn: fetchTodos,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : null;
    },
  });
};

export default useFetchUsers;
