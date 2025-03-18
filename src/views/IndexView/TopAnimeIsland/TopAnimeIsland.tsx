import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { query_client } from "@react/tan_stack_query/query_client";
import TopAnime from "./TopAnime/TopAnime";

export default function TopAnimeIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <TopAnime />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
