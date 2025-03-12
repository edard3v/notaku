<script lang="ts">
  import css from "./TopAnime.module.css";
  import { onDestroy } from "svelte";
  import { createQuery } from "@tanstack/svelte-query";
  import KeenSlider, { type KeenSliderInstance } from "keen-slider";
  import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
  import { ROUTER } from "@router/router";

  let container: HTMLDivElement;
  let slider: KeenSliderInstance;

  const query = createQuery({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  });

  const init_slider = () => {
    if (container) {
      slider = new KeenSlider(container, {
        loop: false,
        slides: { perView: "auto", spacing: 32 },
        created: (_slider) => {
          // Se ejecuta luego de estar montado el slider
        },
        slideChanged: (_slider) => {
          // Se ejecuta cada que cambia de diapositiva
        },
      });
    }
  };

  $: if ($query.data) {
    init_slider();
  }

  onDestroy(() => {
    slider?.destroy();
  });
</script>

<div bind:this={container} class={["keen-slider", css.top_anime]}>
  {#if $query.isError}
    <p>Error</p>
  {/if}

  {#if $query.isLoading}
    <p>Loading...</p>
  {/if}

  {#if $query.isSuccess}
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
