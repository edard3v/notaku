import Cross from "@react/components/icons/Cross";
import css from "./SearchAnimes.module.css";
import Search from "@react/components/inputs/Search/Search";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "./search_animes_store";

export default function SearchAnimes() {
  const { is_visible } = useStore(search_animes_store.store);

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form className={css.form}>
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search name="title" />
      </form>
    </div>
  );
}
