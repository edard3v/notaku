import { useQuery } from "@tanstack/react-query";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import css from "./TopAnime.module.css";
import Loading from "@react/components/loaders/Loading/Loading";
import ErrorComp from "@react/components/errors/ErrorComp/ErrorComp";
import { cls } from "@utils/cls";
import { ANIME } from "@views/AnimeView/config";
import KeenSlider from "@react/components/shared/KeenSlider/KeenSlider";

export default function TopAnime() {
  const query = useQuery({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  });

  const slide = query?.data?.data.map((item) => (
    <div key={item.mal_id} className={cls([css.slide])}>
      <a href={`${ANIME.href}?id=${item.mal_id}`}>
        <img src={item.images.webp.large_image_url} alt={item.title} />
      </a>
      <p>{item.genres.map((genre) => genre.name).join(", ")}</p>
    </div>
  ));

  return (
    <div className={css.top_anime}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}

      {query.isSuccess && (
        <KeenSlider options={{ perView: "auto", spacing: 32 }}>{slide}</KeenSlider>
      )}
    </div>
  );
}
