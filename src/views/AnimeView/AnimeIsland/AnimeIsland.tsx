import { QueryClientProvider } from "@tanstack/react-query";
import { query_client } from "@react/tan_stack_query/query_client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Anime from "./Anime/Anime";

export default function AnimeIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <Anime />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
