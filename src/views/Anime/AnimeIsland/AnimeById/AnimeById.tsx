import css from "./AnimeById.module.css";
import { createQuery } from "@tanstack/solid-query";
import { get_anime_id } from "./get_anime_id";
import { get_anime_by_id_full_fetch } from "./get_anime_by_id_full_fetch/get_anime_by_id_full_fetch";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";
import Loading from "@solid/components/loaders/Loading/Loading";
import "@justinribeiro/lite-youtube";
import LiteYoutube from "@solid/components/shared/LiteYoutube/LiteYoutube";

export default function AnimeById() {
  const anime_id = get_anime_id();
  const query = createQuery(() => ({
    queryKey: ["anime_by_id", { anime_id }],
    queryFn: ({ signal }) => get_anime_by_id_full_fetch({ signal, id: anime_id }),
  }));

  const anime = () => query.data?.data;
  const video_id = () => anime()?.trailer.youtube_id || "mqDg5Oi8S_E";
  const title = () => anime()?.title;
  const synopsis = () => anime()?.synopsis;
  const score = () => anime()?.score;
  const scored_by = () => anime()?.scored_by;
  const streaming = () => anime()?.streaming;
  const year = () => anime()?.year;
  const favorites = () => anime()?.favorites;
  const img = () => anime()?.images.webp.large_image_url;
  const genres = () =>
    anime()
      ?.genres.map((item) => item.name)
      .join(", ");

  return (
    <div class={css.anime_by_id}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}

      {query.isSuccess && (
        <>
          <LiteYoutube video_id={video_id()} class={css.lite} />
          <section class={css.info}>
            <img src={img()} alt={title()} />

            <div class={css.wrapper_1}>
              <h1>{title()}</h1>
              <div>{genres()}</div>
              <p>{synopsis()}</p>

              <div>
                <div>🗳️ {Intl.NumberFormat("es-ES").format(scored_by() ?? 0)}</div>
                <div>⭐️ {score()?.toFixed(1)}</div>
                <div>♥️ {Intl.NumberFormat("es-ES").format(favorites() ?? 0)}</div>
                <div>🗓️ {year()}</div>
              </div>

              <div class={css.streaming}>
                {streaming()?.map((item) => (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
