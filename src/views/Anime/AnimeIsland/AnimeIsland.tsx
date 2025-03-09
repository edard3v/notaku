import { query_client } from "@solid/tan_stack_query/query_client";
import { QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import AnimeById from "./AnimeById/AnimeById";

export default function AnimeIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <AnimeById />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}
