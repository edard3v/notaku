<script lang="ts">
  import css from "./AnimeById.module.css";
  import { createQuery } from "@tanstack/svelte-query";
  import { get_anime_id } from "./get_anime_id";
  import { get_anime_by_id_full_fetch } from "./get_anime_by_id_full_fetch/get_anime_by_id_full_fetch";
  import ErrorComp from "@svelte/components/errors/ErrorComp/ErrorComp.svelte";
  import Loading from "@svelte/components/loaders/Loading/Loading.svelte";
  import LiteYoutube from "@svelte/components/shared/LiteYoutube/LiteYoutube.svelte";

  const anime_id = get_anime_id();
  const query = createQuery({
    queryKey: ["anime_by_id", { anime_id }],
    queryFn: ({ signal }) => get_anime_by_id_full_fetch({ signal, id: anime_id }),
  });

  const anime = $derived($query.data?.data)!;
</script>

<div class={css.anime_by_id}>
  {#if $query.isError}
    <ErrorComp />
  {:else if $query.isLoading}
    <Loading />
  {:else if anime}
    <LiteYoutube class={css.lite} videoid={anime.trailer.youtube_id} />
    <section class={css.info}>
      <img src={anime.images.webp.large_image_url} alt={anime.title} />

      <div class={css.wrapper_1}>
        <h1>{anime.title}</h1>
        <div>{anime.genres.map((item) => item.name).join(", ")}</div>
        <p>{anime.synopsis}</p>

        <div>
          <div>🗳️ {Intl.NumberFormat("es-ES").format(anime.scored_by ?? 0)}</div>
          <div>⭐️ {anime.score.toFixed(1)}</div>
          <div>♥️ {Intl.NumberFormat("es-ES").format(anime.favorites ?? 0)}</div>
          <div>🗓️ {anime.year}</div>
        </div>

        <div class={css.streaming}>
          {#each anime.streaming as item}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          {/each}
        </div>
      </div>
    </section>
  {/if}
</div>
