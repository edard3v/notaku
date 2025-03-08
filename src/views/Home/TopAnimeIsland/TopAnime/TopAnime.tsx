import { createQuery } from "@tanstack/solid-query";
import css from "./TopAnime.module.css";
import { cls } from "@utils/cls";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";
import Loading from "@solid/components/loaders/Loading/Loading";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import { createEffect, For, onCleanup } from "solid-js";

export default function TopAnime() {
  let container: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  const query = createQuery(() => ({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  }));

  const init_slider = () => {
    if (container) {
      slider = new KeenSlider(container, {
        loop: false,
        slides: { perView: "auto", spacing: 32 },
        created: (_slider) => {}, // se ejecuta luego de estar montado el slider
        slideChanged: (_slider) => {}, // se ejecuta cada que cambia diapo
      });
    }
  };

  createEffect(() => {
    query.data;
    init_slider();
  });

  onCleanup(() => {
    slider?.destroy();
  });

  return (
    <div ref={(el) => (container = el!)} class={cls(["keen-slider", css.top_anime])}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}

      {query.isSuccess && (
        <>
          <For each={query.data.data}>
            {(item) => (
              <div class={cls(["keen-slider__slide", css.slide])}>
                <a href={"#"}>
                  <img src={item.images.webp.large_image_url} alt={item.title} />
                </a>
                <p>{item.genres.map((item) => item.name).join(", ")}</p>
              </div>
            )}
          </For>
        </>
      )}
    </div>
  );
}
