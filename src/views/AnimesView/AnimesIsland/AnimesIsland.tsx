import css from "./AnimesIsland.module.css";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "@react/components/shared/SearchAnimesIsland/SearchAnimes/search_animes_store";

export default function AnimesIsland() {
  const { animes } = useStore(search_animes_store.store);

  if (!animes) return null;
  return (
    <div className={css.animes}>
      {animes.data.map((item) => (
        <div key={item.mal_id}>
          <h2>{item.title}</h2>
          <p>{item.synopsis}</p>
          <img src={item.images.webp.large_image_url} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
