<script lang="ts">
  import css from "./TopAnime.module.css";
  import { createQuery } from "@tanstack/svelte-query";
  import KeenSlider, { type KeenSliderInstance } from "keen-slider";
  import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
  import { ROUTER } from "@router/router";
  import Loading from "@svelte/components/loaders/Loading/Loading.svelte";
  import ErrorComp from "@svelte/components/errors/ErrorComp/ErrorComp.svelte";

  let container: HTMLDivElement;
  let slider: KeenSliderInstance;

  const query = createQuery({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  });

  $effect(() => {
    if ($query.isSuccess) {
      slider = new KeenSlider(container, {
        loop: false,
        slides: { perView: "auto", spacing: 32 },
      });
    }

    return () => slider?.destroy();
  });
</script>

<div bind:this={container} class={["keen-slider", css.top_anime]}>
  {#if $query.isError}
    <ErrorComp />
  {:else if $query.isLoading}
    <Loading />
  {:else if $query.isSuccess}
    {#each $query.data.data as item}
      <div class={["keen-slider__slide", css.slide]}>
        <a href={`${ROUTER.anime.href}?id=${item.mal_id}`}>
          <img src={item.images.webp.large_image_url} alt={item.title} />
        </a>
        <p>{item.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    {/each}
  {/if}
</div>
