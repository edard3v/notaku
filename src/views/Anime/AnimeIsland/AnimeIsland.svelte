<script lang="ts">
  import { QueryClientProvider } from "@tanstack/svelte-query";
  import { query_client } from "@svelte/tan_stack_query/query_client";
  import { SvelteQueryDevtools } from "@tanstack/svelte-query-devtools";
  import AnimeById from "./AnimeById/AnimeById.svelte";
</script>

<QueryClientProvider client={query_client}>
  <AnimeById />
  <SvelteQueryDevtools />
</QueryClientProvider>
