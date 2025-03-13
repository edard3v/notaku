<script lang="ts">
  import { search_animes_store } from "./search_animes_store";
  import css from "./SearchAnimes.module.css";

  const search_animes = $derived($search_animes_store);
</script>

<div class={[css.search, !search_animes.is_visible && "hidden"]}>
  <input type="text" placeholder="Buscar" />
</div>
