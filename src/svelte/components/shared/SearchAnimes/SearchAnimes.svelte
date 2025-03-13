<script lang="ts">
  import { search_animes_store } from "./search_animes_store";
  import css from "./SearchAnimes.module.css";

  let is_visible = $state(search_animes_store.is_visible);
</script>

<div class={[css.search, !is_visible && "hidden"]}>
  <input type="text" placeholder="Buscar" />
</div>
