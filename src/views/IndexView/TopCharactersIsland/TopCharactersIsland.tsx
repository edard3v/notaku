import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { query_client } from "@react/tan_stack_query/query_client";
import TopCharacters from "./TopCharacters/TopCharacters";

export default function TopCharactersIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <TopCharacters />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
