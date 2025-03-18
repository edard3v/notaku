import { QueryClientProvider } from "@tanstack/react-query";
import { query_client } from "@react/tan_stack_query/query_client";
import SearchAnimes from "./SearchAnimes/SearchAnimes";

export default function SearchAnimesIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <SearchAnimes />
    </QueryClientProvider>
  );
}
