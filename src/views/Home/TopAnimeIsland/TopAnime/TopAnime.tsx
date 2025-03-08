import { createQuery } from "@tanstack/solid-query";
import css from "./TopAnime.module.css";
import { cls } from "@utils/cls";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import Slider from "@solid/components/sliders/Slider/Slider";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";
import Loading from "@solid/components/loaders/Loading/Loading";

export default function TopAnime() {
  const query = createQuery(() => ({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  }));

  return (
    <div class={cls([css.top_anime])}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}
      {query.isSuccess && <Slider />}
    </div>
  );
}
