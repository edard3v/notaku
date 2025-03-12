<script lang="ts">
  import { QueryClientProvider } from "@tanstack/svelte-query";
  import TopAnime from "./TopAnime/TopAnime.svelte";
  import { query_client } from "@svelte/tan_stack_query/query_client";
  import { SvelteQueryDevtools } from "@tanstack/svelte-query-devtools";
</script>

<QueryClientProvider client={query_client}>
  <TopAnime />
  <SvelteQueryDevtools />
</QueryClientProvider>
