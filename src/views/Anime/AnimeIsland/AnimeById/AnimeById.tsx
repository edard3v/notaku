import css from "./AnimeById.module.css";
import { createQuery } from "@tanstack/solid-query";
import { get_anime_id } from "./get_anime_id";
import { get_anime_by_id_full_fetch } from "./get_anime_by_id_full_fetch/get_anime_by_id_full_fetch";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";
import Loading from "@solid/components/loaders/Loading/Loading";
import "@justinribeiro/lite-youtube";

export default function AnimeById() {
  const anime_id = get_anime_id();
  const query = createQuery(() => ({
    queryKey: ["anime_by_id", { anime_id }],
    queryFn: ({ signal }) => get_anime_by_id_full_fetch({ signal, id: anime_id }),
  }));

  const youtube_id = () => query.data?.data.trailer.youtube_id;

  return (
    <div class={css.anime_by_id}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}

      {query.isSuccess && (
        <>
          <span>{youtube_id()}</span>
          <lite-youtube class={css.lite} videoid={"1yXa8MAmocQ"}></lite-youtube>
        </>
      )}
    </div>
  );
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": any;
    }
  }
}
