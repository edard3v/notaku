import { query_client } from "@solid/tan_stack_query/query_client";
import { QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import TopAnime from "./TopAnime/TopAnime";

export default function TopAnimeIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <TopAnime />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}
