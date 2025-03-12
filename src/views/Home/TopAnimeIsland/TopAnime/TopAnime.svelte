<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";

  const query = createQuery({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  });
</script>

<div>
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error</p>
  {:else if $query.isSuccess}
    {#each $query.data.data as todo}
      <p>{todo.title}</p>
    {/each}
  {/if}
</div>
