<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import css from "./SearchAnimes.module.css";
  import {
    search_animes_store,
    search_animes_store_toggle_is_visible,
  } from "./search_animes_store";
  import Cross from "@svelte/components/icons/Cross.svelte";

  const is_visible = $derived($search_animes_store.is_visible);
</script>

{#if is_visible}
  <div class={[css.search]}>
    <div class={css.wrapper}>
      <Cross class={css.cross} onclick={search_animes_store_toggle_is_visible} />
      <Search />
    </div>
  </div>
{/if}
