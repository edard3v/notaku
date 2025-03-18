import css from "./Anime.module.css";
import { useQuery } from "@tanstack/react-query";
import { get_anime_id } from "./get_anime_id";
import { get_anime_by_id_full_fetch } from "./get_anime_by_id_full_fetch/get_anime_by_id_full_fetch";
import ErrorComp from "@react/components/errors/ErrorComp/ErrorComp";
import Loading from "@react/components/loaders/Loading/Loading";
import { cls } from "@utils/cls";

export default function Anime() {
  const anime_id = get_anime_id();

  const query = useQuery({
    queryKey: ["anime_by_id", { anime_id }],
    queryFn: ({ signal }) => get_anime_by_id_full_fetch({ signal, id: anime_id }),
  });

  const anime = query.data?.data;

  if (query.isError) {
    return (
      <div className={cls([css.anime_by_id])}>
        <ErrorComp />
      </div>
    );
  }

  if (query.isLoading) {
    return (
      <div className={cls([css.anime_by_id])}>
        <Loading />
      </div>
    );
  }

  if (!anime) return null;

  return (
    <div className={cls([css.anime_by_id])}>
      {/* <LiteYoutube className={cls([css.lite])} videoid={anime.trailer.youtube_id} /> */}

      <section className={cls([css.info])}>
        <img src={anime.images.webp.large_image_url} alt={anime.title} />

        <div className={cls([css.wrapper_1])}>
          <h1>{anime.title}</h1>

          <div>{anime.genres.map((item) => item.name).join(", ")}</div>

          <p>{anime.synopsis}</p>

          <div>
            <div>🗳️ {Intl.NumberFormat("es-ES").format(anime.scored_by ?? 0)}</div>
            <div>⭐️ {anime.score.toFixed(1)}</div>
            <div>♥️ {Intl.NumberFormat("es-ES").format(anime.favorites ?? 0)}</div>
            <div>🗓️ {anime.year}</div>
          </div>

          <div className={cls([css.streaming])}>
            {anime.streaming.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
