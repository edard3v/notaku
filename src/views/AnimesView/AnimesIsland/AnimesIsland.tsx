import css from "./AnimesIsland.module.css";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "@react/components/shared/SearchAnimesIsland/SearchAnimes/search_animes_store";
import { ANIME } from "@views/AnimeView/config";

export default function AnimesIsland() {
  const { animes } = useStore(search_animes_store.store);

  if (!animes) return null;
  return (
    <div className={css.animes}>
      {animes.data.map((item) => (
        <div key={item.mal_id} className={css.card}>
          <a href={`${ANIME.href}?id=${item.mal_id}`}>
            <img src={item.images.webp.large_image_url} alt={item.title} />
          </a>
          <div className={css.txts}>
            <h2>{item.title}</h2>
            <p>{item.duration}</p>
            <p>Estudios: {item.studios.map((item) => item.name).join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
