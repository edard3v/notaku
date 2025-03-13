<script lang="ts">
  import css from "./SearchAnimes.module.css";
  import {
    search_animes_store,
    search_animes_store_toggle_is_visible,
  } from "./search_animes_store";
  import Cross from "@svelte/components/icons/Cross.svelte";

  const is_visible = $derived($search_animes_store.is_visible);
</script>

<div class={[css.search, !is_visible && "hidden"]}>
  <div class={css.wrapper}>
    <Cross onclick={search_animes_store_toggle_is_visible} />
    <input type="text" placeholder="Buscar" />
  </div>
</div>
